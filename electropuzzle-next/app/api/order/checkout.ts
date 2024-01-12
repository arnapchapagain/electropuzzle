import { Cookie } from "next/font/google";
import BACKEND_URI from "../../data";
import Cookies from "js-cookie";

export async function createOrder(formData: any, promoCode: string, shipCosts: number) {
    const url = `${BACKEND_URI}/api/orders`;

    const existingBasketID = Cookies.get("BasketID");
    if (!existingBasketID || !formData) return 

    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                ...formData, 
                "basket": parseInt(existingBasketID),
                "shipping_cost": shipCosts,
                "status": "initiated",
                "promo_codes": [promoCode]
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        Cookies.remove('BasketID')
        Cookies.remove("basket")
        return data;

    } catch (error) {
        console.log(error);
        return null;
    }
};