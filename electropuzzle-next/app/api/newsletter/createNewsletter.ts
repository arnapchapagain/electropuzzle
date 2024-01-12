import BACKEND_URI from "../../data";

export async function createNewsletter(email: string) {
    const url = `${BACKEND_URI}/api/newsletter-emails`;
    
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                data: {
                    email: email
                }
            })
        })

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.log(error);
    }
}