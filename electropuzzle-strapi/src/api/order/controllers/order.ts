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
      // const validationResult = validateRequestBody(ctx);
      // if (validationResult.error) return ctx.badRequest(validationResult.error);
      // const body: ICreateOrder = validationResult.value;
      const body = ctx.request.body as ICreateOrder;
      body.promo_codes = body.promo_codes.filter((code) => code !== "");

      const basket = await getBasket(body.basket);
      if (!basket) return ctx.badRequest("Basket not found");
      if (basket.pedals.length === 0) return ctx.badRequest("Basket is empty");

      try {
        body.status = "not_completed";
        const orderId = await createOrderEntry(body);

        const payload = await createPaymentPayload(
          orderId.toString(),
          body,
          basket.pedals
        );
        if (payload.amount.value === "0") {
          return ctx.badRequest("Price of order must be greater than 0");
        }

        const paymentInfo = await processPayment(payload, orderId);
        return this.transformResponse(paymentInfo);
      } catch (error) {
        ctx.badRequest(error);
      }
    },

    async success(ctx) {
      ctx.body = "success";
    },
  }),
);

const createOrderInterface = Joi.object({
  basket: Joi.number().required(),
  full_name: Joi.string().required(),
  phone: Joi.string().required(),
  email: Joi.string().email().required(),
  address_street: Joi.string().required(),
  shipping_cost: Joi.number().required(),
  status: Joi.string().required(),
  address_apartment: Joi.string(),
  address_index: Joi.string(),
  address_floor: Joi.string(),
  address_entrance: Joi.string(),
  comments: Joi.string(),
  payment_id: Joi.string(),
  promo_codes: Joi.array().items(Joi.string().allow("")),
});

interface ICreateOrder {
  basket: number;
  full_name: string;
  phone: string;
  email: string;
  address_street: string;
  shipping_cost: number
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
async function fetchPedalInfo(pedalId: number) {
  return await strapi.db.query("api::pedal.pedal").findOne({
    where: { id: pedalId },
    populate: true,
  });
}

// Calculates the price of a pedal after applying applicable promo codes
function calculateDiscountedPrice(pedalInfo: any, promoCodes: string[]) {
  let price = pedalInfo.price;
  if (!pedalInfo)
  pedalInfo.promo_codes.forEach((applicablePromoCode) => {
    if (promoCodes.includes(applicablePromoCode.code)) {
      let discountAmount = pedalInfo.price * (applicablePromoCode.discount_percentage / 100);
      price -= discountAmount;
      let vatAmount = (price * pedalInfo.vat_code.percentage) / 100;
      price += vatAmount;
      if (price <= 0) price = 0; // Prevents negative prices
    }
  });
  return price;
}

// Determines the final price of a pedal, considering whether promo codes are applied or not
async function calculatePedalPrice(pedal: any, promoCodes: string[]) {
  if (promoCodes && promoCodes.length > 0)
    return calculateDiscountedPrice(pedal, promoCodes);
  else
    return pedal.price;
}

async function createOrderEntry(orderData: ICreateOrder) {
  const entry = await strapi.db.query("api::order.order").create({
    data: { ...orderData }
  });
  return entry.id;
}

async function createPaymentPayload(
  orderId: string,
  order: ICreateOrder,
  pedals: any[],
) {
  let items = [];
  let totalCost = 0;
  for (const pedal of pedals) {
    const pedalInfo = await fetchPedalInfo(pedal.id);
    var vatCode = 1;
    // if pedal has vat_code, use it
    if (pedalInfo.vat_code && pedalInfo.vat_code.code){
      vatCode = pedalInfo.vat_code.code;
    }
    let pedalPrice = await calculatePedalPrice(pedalInfo, order.promo_codes);
    totalCost += pedalPrice;
    totalCost += order.shipping_cost;
    items.push({
      description: `Order of ${pedalInfo.name} by ${order.full_name}`,
      quantity: 1,
      amount: {
        value: pedalPrice,
        currency: "RUB",
      },
      vat_code: vatCode,
    });
  }
  return {
    amount: {
      value: totalCost.toString(),
      currency: "RUB",
    },
    payment_method_data: {
      type: "bank_card",
    },
    confirmation: {
      type: "redirect",
      return_url:
        process.env.CHECKOUT_SUCCESS_URL ||
        "http://localhost:1337/success",
    },
    receipt: {
      customer: {
        full_name: order.full_name,
        email: order.email,
      },
      items: items,
    },
  } as ICreatePayment;
}

async function processPayment(payload, orderId) {
  let payment = await checkout.createPayment(payload, IDEMPOTENCY_KEY);
  await strapi.entityService.update("api::order.order", orderId, {
    data: {
      payment_id: payment.id,
      status: "pending",
    },
  });
  return {
    order_id: orderId,
    payment_info: payment,
  };
}
