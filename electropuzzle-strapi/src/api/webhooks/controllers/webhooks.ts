/**
 * A set of functions called "actions" for `webhooks`
 */

import { Context } from 'koa';

export default {
  
  // The webhook endpoint that will be called by the payment gateway when the payment is successful
  // the payment gateway will send the payment details in the request body
  // We NEED to send a response back to the payment gateway to confirm that we received the payment details via response code 200
  // response body will be ignored by the payment gateway, and ONLY 200 are accepted 
  success: async (ctx: Context, next) => {
    ctx.status = 200;
    console.log('Webhook success');
    console.log(ctx.request.body);
    ctx.body = "OK";
  },
  
  // The webhook endpoint that will be called by the payment gateway when the payment is failed
  cancel: async (ctx: Context, next) => {
    ctx.status = 200;
    console.log('Webhook failed');
    console.log(ctx.request.body);
    ctx.body = "OK";
  }
};
