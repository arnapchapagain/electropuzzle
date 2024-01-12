import BACKEND_URI from "../../data";

export async function createNewsletter() {
    const url = `${BACKEND_URI}/api/baskets`;
    
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({})
        })

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return;

    } catch (error) {
        console.log(error);
    }
}