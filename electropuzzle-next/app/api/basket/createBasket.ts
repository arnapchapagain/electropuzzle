import { getBasket } from "@/vendor/basket/basket";
import BACKEND_URI from "../../data";
import Cookies from "js-cookie";
import { updateBasket } from "./updateBasket";

export async function createBasket() {
  const url = `${BACKEND_URI}/api/baskets`;

  const existingBasketID = Cookies.get("BasketID");
  console.log(existingBasketID)

  if (existingBasketID) {
    updateBasket(existingBasketID)
    return;
  }

  const rawBasket = getBasket()
  console.log(rawBasket)

  if (!rawBasket) return

  const allPedalsSlug: any = [];

  for (const obj of rawBasket) {
    allPedalsSlug.push(obj.productSlug);
  }
  
  console.log(allPedalsSlug)

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({slugs: allPedalsSlug})
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    Cookies.set("BasketID", JSON.stringify(data.data.id));
    return data;

  } catch (error) {
    console.log(error);
  }
};