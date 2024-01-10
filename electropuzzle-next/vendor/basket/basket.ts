import Cookies from "js-cookie";

export function addToBasket({
    productSlug,
    quantity,
}: {
    productSlug: string;
    quantity: number;
}) {
    const basket = Cookies.get("basket");
    const parsedBasket = basket ? JSON.parse(basket) : [];

    let productExists = parsedBasket.find(
        (item: { productSlug: string }) => item.productSlug === productSlug
    );
    if (productExists) {
        productExists.quantity += quantity;
    } else {
        parsedBasket.push({ productSlug, quantity });
    }

    console.log("parsedBasket", parsedBasket);
    Cookies.set("basket", JSON.stringify(parsedBasket));
}


export function deleteFromBasket({
    productSlug,
    quantity
}: {
    productSlug: string;
    quantity: number;
}) {
    const basket = Cookies.get("basket");
    const parsedBasket = basket ? JSON.parse(basket) : [];

    let productExists = parsedBasket.find(
        (item: { productSlug: string }) => item.productSlug === productSlug
    );
    if (productExists) {
        productExists.quantity -= quantity;
        if (productExists.quantity < 1) {
            const updatedBasket = parsedBasket.filter(
                (item: { productSlug: string }) => item.productSlug !== productSlug
            );
            console.log("updatedBasket", updatedBasket);
            Cookies.set("basket", JSON.stringify(updatedBasket));
            return;
        }
    }
    Cookies.set("basket", JSON.stringify(parsedBasket));
}

export function getBasket() {
    const basket = Cookies.get("basket");
    const parsedBasket = basket ? JSON.parse(basket) : [];
    return parsedBasket;
}