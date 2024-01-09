/**
 * order controller
 */

import { factories } from "@strapi/strapi";
import { YooCheckout, ICreatePayment } from "@a2seven/yoo-checkout";
import Joi from "joi";
import { Context } from "koa";

const checkout = new YooCheckout({
  shopId: process.env.SHOP_ID || "your_shop_id",
  secretKey: process.env.SECRET_KEY || "your_secret_key",
});

// This is a constant that is used to ensure idempotency of the payment creation request.
const IDEMPOTENCY_KEY = genV4UUID();

export default factories.createCoreController(
  "api::order.order",
  ({ strapi }) => ({
    async create(ctx: Context) {
      await this.validateQuery(ctx);
      const validationResult = validateRequestBody(ctx);
      if (validationResult.error) return ctx.badRequest(validationResult.error);
      const body: ICreateOrder = validationResult.value;

      const basket = await getBasket(body.basket_id);
      if (!basket) return ctx.badRequest("Basket not found");
      if (basket.pedals.length === 0) return ctx.badRequest("Basket is empty");

      try {
        let totalCost = await calculateTotalCost(basket.pedals, body.promo_codes);

        body.status = 'not_completed';
        const orderId = await createOrderEntry(body);

        const payload = createPaymentPayload(totalCost.toString(), orderId.toString());

        const paymentInfo = await processPayment(payload, orderId);
        return this.transformResponse(paymentInfo);

      } catch (error) {
          ctx.badRequest(error);
      }
    },

    async success(ctx) {
      ctx.body = "success";
      console.log(ctx.request.query);
    },
  }),
);

const createOrderInterface = Joi.object({
  basket_id: Joi.number().required(),
  full_name: Joi.string().required(),
  phone: Joi.string().required(),
  email: Joi.string().email().required(),
  address_street: Joi.string().required(),
  status: Joi.string().required(),
  address_apartment: Joi.string(),
  address_index: Joi.string(),
  address_floor: Joi.string(),
  address_entrance: Joi.string(),
  comments: Joi.string(),
  payment_id: Joi.string(),
  promo_codes: Joi.array().items(Joi.string()),
});

interface ICreateOrder {
  basket_id: number;
  full_name: string;
  phone: string;
  email: string;
  address_street: string;
  status: string;
  address_apartment?: string;
  address_index?: string;
  address_floor?: string;
  address_entrance?: string;
  comments?: string;
  payment_id?: string;
  promo_codes?: string[];
}

function genV4UUID() {
  /**
   * A basic v4 UUID generator. It uses Math.random().
   * There is a chance of collision, but it's very low, like 2^-64 or something.
   */
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const b64 = (Math.random() * 16) | 0;
    const uuid4 = c == "x" ? b64 : (b64 & 0x3) | 0x8;
    return uuid4.toString(16);
  });
}

function validateRequestBody(ctx) {
  const { error, value } = createOrderInterface.validate(ctx.request.body);
  return { error, value: value as ICreateOrder };
}

async function getBasket(basketId: number) {
  return await strapi.db.query("api::basket.basket").findOne({
      where: { id: basketId },
      populate: true,
  });
}

// Fetches pedal information from the database
async function fetchPedalInfo(pedalId: string) {
  return await strapi.db.query("api::pedal.pedal").findOne({
    where: { id: pedalId },
    populate: true,
  });
}

// Calculates the price of a pedal after applying applicable promo codes
function calculateDiscountedPrice(pedalInfo: any, promoCodes: string[]) {
  let price = pedalInfo.price;
  pedalInfo.promo_codes.forEach(applicablePromoCode => {
    if (promoCodes.includes(applicablePromoCode.code)) {
      let discountAmount = pedalInfo.price * (applicablePromoCode.discount_percentage / 100);
      price -= discountAmount;
      if (price <= 0) price = 0; // Prevents negative prices
    }
  });
  return price;
}

// Determines the final price of a pedal, considering whether promo codes are applied or not
async function calculatePedalPrice(pedal: any, promoCodes: string[]) {
  const pedalInfo = await fetchPedalInfo(pedal.id);
  if (!pedalInfo) {
    throw new Error(`Pedal with ID ${pedal.id} not found in the database`);
  }

  return promoCodes.length > 0 ? calculateDiscountedPrice(pedalInfo, promoCodes) : pedalInfo.price;
}

// Iterates over all pedals to calculate the total cost
async function calculateTotalCost(pedals: any[], promoCodes: string[]) {
  let totalCost = 0;
  if (!promoCodes) promoCodes = [];

  // remove all duplicates from promoCodes so that we don't apply the same promo code twice
  promoCodes = [...new Set(promoCodes)];

  for (const pedal of pedals) {
    const pedalPrice = await calculatePedalPrice(pedal, promoCodes);
    totalCost += pedalPrice;
  }

  return totalCost;
}

async function createOrderEntry(orderData: ICreateOrder) {
  const entry = await strapi.entityService.create('api::order.order', {
      data: { ...orderData }
  });
  return entry.id;
}

function createPaymentPayload(total: string, orderId: string) {
  return {
    amount: {
        value: total,
        currency: 'RUB'
    },
    payment_method_data: {
        type: 'bank_card'
    },
    confirmation: {
        type: 'redirect',
        return_url: process.env.CHECKOUT_SUCCESS_URL || 'http://localhost:1337/orders/success?order_id=' + orderId
    }
  } as ICreatePayment;
}

async function processPayment(payload, orderId) {
  let payment = await checkout.createPayment(payload, IDEMPOTENCY_KEY);
  await strapi.entityService.update('api::order.order', orderId, {
      data: {
          payment_id: payment.id,
          status: 'pending'
      },
  });
  return {
      order_id: orderId,
      payment_info: payment
  };
}