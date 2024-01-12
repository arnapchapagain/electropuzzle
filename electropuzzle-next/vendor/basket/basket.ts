import { createBasket } from "@/app/api/basket/createBasket";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

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
    createBasket()

    return toast.success('Successfully added to cart!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
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

            createBasket()
            return;
        }
    }
    Cookies.set("basket", JSON.stringify(parsedBasket));
    createBasket()
    return toast.success('Product removed from basket', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
}

export function getBasket() {
    const basket = Cookies.get("basket");
    const parsedBasket = basket ? JSON.parse(basket) : [];
    return parsedBasket;
}