import { getBasket } from "@/vendor/basket/basket";
import BACKEND_URI from "../../data";

export async function updateBasket(existingBasketID: any) {
  const url = `${BACKEND_URI}/api/baskets/${existingBasketID}`;
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };

  const updateBasketBodyData = getBasket();
  const allPedalsSlug: any = [];

  for (const obj of updateBasketBodyData) {
    allPedalsSlug.push(obj.productSlug);
  }

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify({slugs: allPedalsSlug})
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