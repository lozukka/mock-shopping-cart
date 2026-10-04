import { useEffect, useState } from "react";
import { fetchItems } from "../utils/fetchItems";
import ProductCard from "../components/ProductCard";

function ShopPage() {
  const [itemList, setItemList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadItems() {
      try {
        const qty = 20;
        const results = await fetchItems(qty);
        setItemList(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    loadItems();
  }, []);

  if (loading) return <p>Loading items...</p>;
  if (error) return <p>Something went wrong: {error}</p>;

  return (
    <>
      <h1>Hi!</h1>
      <div>
        <div>
          {itemList.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}
export default ShopPage;
