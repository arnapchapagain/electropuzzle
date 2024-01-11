import BACKEND_URI from "../../data";

export async function getAllPedals() {
  const url = `${BACKEND_URI}/graphql`;
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };

  const query = `query{
    pedals{
      data{
        id
        attributes{
          name
          based_on
          price
          stock
          description
          image{
            data{
              attributes{
                name
                url
                alternativeText
              }
            }
          }
          additional_images{
            data{
              attributes{
                name
                url
                alternativeText
              }
            }
          }
          peculiarity
          management
          characteristics
          slug
          videos{
            data{
              attributes{
                name
                url
                alternativeText
                previewUrl
              }
            }
          }
          categories{
            data{
              attributes{
                type
                value
                description
              }
            }
          }
          youtube_links{
            data{
              attributes{
                link
                embed_code
                preview_image{
                  data{
                    attributes{
                      name
                      alternativeText
                      url
                      previewUrl
                    }
                  }
                }
              }
            }
          }
          avito_link
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