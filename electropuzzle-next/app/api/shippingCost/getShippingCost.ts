import BACKEND_URI from "../../data";

export async function shippingCosts() {
  const url = `${BACKEND_URI}/graphql`;
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };

  const query = `query{
    shippingCosts{
      data{
        attributes{
          cost
          location
        }
      }
    }
  }`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        query: query,
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
};