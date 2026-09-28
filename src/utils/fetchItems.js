export async function fetchItems() {
  const response = await fetch("https://dummyjson.com/products?limit=20");
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  const data = await response.json();
  return data.products;
}
