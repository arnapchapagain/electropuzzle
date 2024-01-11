import BACKEND_URI from "../../data";

export async function updateBasket(existingBasketID: any) {
  const url = `${BACKEND_URI}/graphql`;
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };

  const updateBasketBodyData = ``;

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify({updateBasketBodyData})
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.log(error);
  }
};