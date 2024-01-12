import BACKEND_URI from "../../data";
import Cookies from "js-cookie";

export async function createOrder(formData: any, promoCode: string) {
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
                "basket_id": parseInt(existingBasketID),
                "status": "initiated",
                "promo_codes": [promoCode]
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        Cookies.remove('BasketID')
        return data;

    } catch (error) {
        console.log(error);
        return null;
    }
};