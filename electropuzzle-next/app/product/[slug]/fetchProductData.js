export default async function fetchProductData (params, setPedalData, setLoading, setError) {
    const url = 'http://localhost:1337/graphql';
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };

    const query = `query GetPedalData($slug: String!){
      pedals(filters: {slug: {eq: $slug}}){
        data{
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
          variables: {slug: params.slug},
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setPedalData(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
};