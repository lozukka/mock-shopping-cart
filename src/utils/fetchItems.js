const productFetchUrl = `https://dummyjson.com/products/category/home-decoration?limit=`;

export async function fetchItems(qty) {
  const url = `${productFetchUrl}${qty}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  const data = await response.json();
  return data.products;
}
