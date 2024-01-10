import { getAllPedals } from "./getAllPedals";

export async function getProductBySlug(slug: string) {
    const allPedals = await getAllPedals();

    const product = allPedals?.data?.pedals?.data?.find((pedal: any) => pedal.attributes.slug === slug);
    return product;
}