import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { CircleMinus } from "lucide-react";
import { CirclePlus } from "lucide-react";

function ProductCard({ id, title, thumbnail, description, price }) {
  const { cart, addToCart, incrementQty, decrementQty } =
    useContext(CartContext);

  const cartItem = cart.find((item) => item.id === id);

  return (
    <>
      <div>
        <img src={thumbnail} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{price}</p>
        {cartItem ? (
          <div>
            <button
              onClick={() => decrementQty(id)}
              aria-label="Decrease quantity"
            >
              <CircleMinus />
            </button>
            <span>{cartItem.quantity}</span>
            <button
              onClick={() => incrementQty(id)}
              aria-label="Increase quantity"
            >
              <CirclePlus />
            </button>
          </div>
        ) : (
          <button onClick={() => addToCart({ id, title, price, thumbnail })}>
            Add to Cart
          </button>
        )}
      </div>
    </>
  );
}

export default ProductCard;
