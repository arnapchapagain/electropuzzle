/**
 * promo-code controller
 */

import { factories } from "@strapi/strapi";
import { Context } from "koa";

import Joi from "joi";

const checkPromoCodeInterface = Joi.object({
    code: Joi.string().required(),
    pedal_id: Joi.number(),
});

interface ICheckPromoCode {
    code: string;
    pedal_id?: number;
}

interface IPromoCode {
    id: number;
    code: string;
    discount_percentage: number;
    expiration_date: any;
}

interface IPedal {
    id: number;
    promo_codes: IPromoCode[];
}

export default factories.createCoreController(
    "api::promo-code.promo-code",
    ({ strapi }) => ({
        async check(ctx: Context) {
            let { error, value } = checkPromoCodeInterface.validate(ctx.request.body);
            if (error) return ctx.badRequest(error);
            let body = value as ICheckPromoCode;

            let entry = await strapi.db.query("api::promo-code.promo-code").findOne({
                where: { code: body.code },
                populate: true,
            });
            if (!entry) {
                return ctx.notFound("Invalid code provided");
            }
            let promoCode = entry as IPromoCode;

            let expDate = new Date(promoCode.expiration_date);

            if (expDate < new Date()) {
                return ctx.badRequest("Promo code is expired");
            }

            // if the pedal_id is not provided, then the promo code is a valid promo code
            // but for which pedal -- it is not specified
            if (body.pedal_id === null || body.pedal_id === undefined) {
                return this.transformResponse({
                    message: "Promo code is valid code",
                    code: promoCode.code,
                    discount_percentage: promoCode.discount_percentage,
                    expiration_date: promoCode.expiration_date,
                });
            }

            entry = await strapi.db.query("api::pedal.pedal").findOne({
                where: { id: body.pedal_id },
                populate: true,
            });
            if (!entry) {
                return ctx.notFound("Invalid pedal id provided");
            }
            let pedal = entry as IPedal;

            let validCodes = pedal.promo_codes.filter((pedalPromoCode) => {
                return pedalPromoCode.id === promoCode.id;
            });

            if (validCodes.length === 0)
                return ctx.notFound("Promo code is not valid for this pedal id");

            return this.transformResponse({
                message: "Promo code is valid for this pedal id",
                code: promoCode.code,
                discount_percentage: promoCode.discount_percentage,
                expiration_date: promoCode.expiration_date,
            });
        },
    }),
);
