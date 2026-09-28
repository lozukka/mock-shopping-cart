import { useEffect, useState } from "react";
import { fetchItems } from "../utils/fetchItems";
import ProductCard from "../components/ProductCard";

function ShopPage() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    async function loadItems() {
      const results = await fetchItems();
      setItemList(results);
    }
    loadItems();
  }, []);

  return (
    <>
      <h1>Hi!</h1>
      <div>
        {itemList.length === 0 ? (
          <p>Loading items...</p>
        ) : (
          <div>
            {itemList.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
export default ShopPage;
