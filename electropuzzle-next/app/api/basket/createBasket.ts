import { getBasket } from "@/vendor/basket/basket";
import BACKEND_URI from "../../data";
import Cookies from "js-cookie";
import { updateBasket } from "./updateBasket";

export async function createBasket() {
  const url = `${BACKEND_URI}/api/baskets`;

  const existingBasketID = Cookies.get("basketID");

  if (existingBasketID) {
    updateBasket(existingBasketID)
    return;
  }

  const rawBasket = getBasket()
  console.log(rawBasket)

  const allPedalsSlug = rawBasket.map((item: any) => `"${item.productSlug}"`).join(', ');

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };

  const basketData = `{
    "slugs": [${allPedalsSlug}]
  }`

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({basketData})
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.log(error);
  }
};