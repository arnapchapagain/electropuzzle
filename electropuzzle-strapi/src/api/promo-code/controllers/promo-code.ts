/**
 * promo-code controller
 */

import { factories } from '@strapi/strapi'
import { Context } from 'koa';

export default factories.createCoreController('api::promo-code.promo-code', ({ strapi }) => ({

    async check(ctx: Context) {
        const { code } = ctx.request.query;
        if (!code) {
            return ctx.badRequest("code is required on the query parameters")
        }

        const promoCode = await strapi.db.query('api::promo-code.promo-code').findOne({
            select: ['*'],
            where: { code: code.toString() },
            populate: { category: true },
        });

        if (!promoCode) {
            return ctx.notFound("Invalid code provided");
        }

        const expDate = new Date(promoCode.expiration_date);

        if (expDate< new Date()) {
            return ctx.badRequest("Promo code is expired");
        }

        ctx.response.status = 200;
        ctx.body = {
            data: {
                message: "Promo code is valid",
                code: promoCode.code,
                discount_percentage: promoCode.discount_percentage,
                expiration_date: promoCode.expiration_date,
            }
        }
    }
}));
