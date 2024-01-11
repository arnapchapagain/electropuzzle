/**
 * basket controller
 */

import { factories } from '@strapi/strapi'
import { Context } from 'koa';
import Joi from "joi";

const createBasketSchema = Joi.object({
    slugs: Joi.array().items(Joi.string()).required(),
});

interface ICreateBasket {
    slugs: string[];
}


export default factories.createCoreController(
    'api::basket.basket',
    ({ strapi }) => ({

        async create(ctx: Context) {
            await this.validateQuery(ctx);
            const {error, value} = createBasketSchema.validate(ctx.request.body);
            if (error) return ctx.badRequest(error);
            const body: ICreateBasket = value;
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
    })

);
