import { useEffect } from "react";
import { fetchItems } from "../utils/fetchItems";
function ShopPage() {
  useEffect(() => {
    console.log(fetchItems());
  }, []);

  return (
    <>
      <h1>Hi!</h1>
    </>
  );
}
export default ShopPage;
