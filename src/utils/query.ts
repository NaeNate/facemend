export const query = async (query: string) => {
  return await fetch(
    "https://1j0aer-52.myshopify.com/api/2024-10/graphql.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": process.env.STOREFRONT!,
      },
      body: JSON.stringify({ query }),
    },
  ).then((res) => res.json())
}
