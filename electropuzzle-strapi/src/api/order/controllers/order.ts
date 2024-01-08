/**
 * order controller
 */

import { factories } from '@strapi/strapi'
import { YooCheckout, ICreatePayment } from '@a2seven/yoo-checkout';
import Joi from 'joi';

const checkout = new YooCheckout({ 
    shopId: process.env.SHOP_ID || "your_shop_id", 
    secretKey: process.env.SECRET_KEY || "your_secret_key" 
});

function genV4UUID() {
    /**
     * A basic v4 UUID generator. It's not completely "safe enough" as it's using Math.random(), however it's good enough for now.
     * There is a chance of collision, but it's very low, like 2^-64 or something.
     */
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      // generate a random number between 0 and 15 and convert it to base 16.  
      const b64 = (Math.random() * 16) | 0;
      // since we're using v4 UUID, we need to set the 2 most significant bits (bits 6 and 7) of the 7th byte to 0 and 1, respectively.
      const uuid4 = c == 'x' ? b64 : (b64 & 0x3) | 0x8; 
      // convert to string in base 16 and return.
      return uuid4.toString(16);
    });
}

const createOrderInterface = Joi.object({
  basket_id: Joi.number().required(),
  total: Joi.number().required(),
  full_name: Joi.string().required(),
  phone: Joi.string().required(),
  email: Joi.string().email().required(),
  address_street: Joi.string().required(),
  status: Joi.string().required(),
  address_apartment: Joi.string(),
  address_index: Joi.string(),
  address_floor: Joi.string(),
  address_entrance: Joi.string(),
  comments: Joi.string()
});

interface ICreateOrderInterface {
  basket_id: number;
  total: number;
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
}

// This is a constant that is used to ensure idempotency of the payment creation request.
const IDEMPOTENCY_KEY = genV4UUID();

export default factories.createCoreController(
    "api::order.order",
    ({ strapi }) => ({
  
      async create(ctx) {
        const { error, value } = createOrderInterface.validate(ctx.request.body);
        if (error) {
          return ctx.badRequest(error)
        }
        const body: ICreateOrderInterface = value;

        const payload: ICreatePayment = {
            amount: {
                value: body.total.toString(),
                currency: 'RUB'
            },
            payment_method_data: {
                type: 'bank_card'
            },
            confirmation: {
                type: 'redirect',
                return_url: 'http://localhost:1337/api/order/confirm'
            }
        };

        const entry = await strapi.entityService.create('api::order.order', {
          data: {
            ...body
          }
        });
        let orderId = entry.id;
        
        try {
            const payment = await checkout.createPayment(payload, IDEMPOTENCY_KEY);
            ctx.response.status = 201;
            ctx.send({
              order_id: orderId,
              payment_info: payment
            });
        } catch (error) {
             ctx.badRequest(error)
        }
      },

      async confirm(ctx) {
      }
    })
  );