import BACKEND_URI from "../../data";

export async function validatePromoCode({ promoCode, pedalId }: {
    promoCode: any;
    pedalId: any;
}) {
    const url = `${BACKEND_URI}/api/promo-code/check`;
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };


    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                code: promoCode,
                pedal_id: pedalId
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.log(error);
    }
}

