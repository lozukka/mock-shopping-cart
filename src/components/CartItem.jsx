import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { CircleMinus } from "lucide-react";
import { CirclePlus } from "lucide-react";
import { Trash } from "lucide-react";

function CartItem({ id, title, thumbnail, price, quantity }) {
  const { removeItem, incrementQty, decrementQty } = useContext(CartContext);

  return (
    <>
      <div className="cartItemCard">
        <h3>{title}</h3>
        <img src={thumbnail} alt={title} />
        <p>{price}</p>
        <button onClick={() => incrementQty(id)} aria-label="Increase quantity">
          <CirclePlus />
        </button>
        <span>{quantity}</span>
        <button onClick={() => decrementQty(id)} aria-label="Decrease quantity">
          <CircleMinus />
        </button>
        <button
          onClick={() => removeItem(id)}
          aria-label="Remove item from cart"
        >
          <Trash />
        </button>

        <span>{(price * quantity).toFixed(2)}</span>
      </div>
    </>
  );
}

export default CartItem;
