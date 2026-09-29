import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ id, title, thumbnail, description, price }) {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <div>
        <img src={thumbnail} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{price}</p>
        <button onClick={() => addToCart({ id, title, price, thumbnail })}>
          Add to Cart
        </button>
      </div>
    </>
  );
}

export default ProductCard;
