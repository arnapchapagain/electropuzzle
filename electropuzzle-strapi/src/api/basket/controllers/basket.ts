/**
 * basket controller
 */

import { factories } from '@strapi/strapi'
import { Context } from 'koa';
import Joi from "joi";

const basketSchema = Joi.object({
    slugs: Joi.array().items(Joi.string()).required(),
});


interface IBasket {
    slugs: string[];
}

export default factories.createCoreController(
    'api::basket.basket',
    ({ strapi }) => ({

        async create(ctx: Context) {
            await this.validateQuery(ctx);
            const {error, value} = basketSchema.validate(ctx.request.body);
            if (error) return ctx.badRequest(error);
            const body: IBasket = value;
            if (body.slugs.length === 0) return ctx.badRequest("Basket is empty");
            var pedalIds: number[] = [];
            for (const slug of body.slugs) {
                const pedal = await strapi.db.query("api::pedal.pedal").findOne({
                    where: { slug: slug },
                });
                if (!pedal) return ctx.badRequest(`Pedal with slug ${slug} not found`);
                pedalIds.push(pedal.id);
            }

            const basket = await strapi.db.query("api::basket.basket").create({
                data: {
                    pedals: pedalIds
                }
            });
            return this.transformResponse(basket);
        },

        async update(ctx: Context) {
            await this.validateQuery(ctx);
            const basketId = ctx.params.id;
            const basket = await strapi.db.query("api::basket.basket").findOne({
                where: { id: basketId },
            });
            if (!basket) return ctx.badRequest(`Basket with id ${basketId} not found`);
            const {error, value} = basketSchema.validate(ctx.request.body);
            if (error) return ctx.badRequest(error);
            const body: IBasket = value;
            var pedalIds = [];
            for (const slug of body.slugs) {
                const pedal = await strapi.db.query("api::pedal.pedal").findOne({
                    where: { slug: slug },
                });
                if (!pedal) return ctx.badRequest(`Pedal with slug ${slug} not found`);
                pedalIds.push(pedal.id);
            }
            var newBasket = await strapi.db.query("api::basket.basket").update({
                where: { id: basketId },
                data: {
                    pedals: pedalIds
                }
            });
            return this.transformResponse(newBasket);
        }
    })

);
