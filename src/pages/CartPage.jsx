import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";

function CartPage() {
  const { cart } = useContext(CartContext);

  return (
    <>
      {cart.length === 0 ? (
        <div>
          <span>Cart is empty</span>
        </div>
      ) : (
        cart.map((item) => <CartItem key={item.id} {...item} />)
      )}
    </>
  );
}

export default CartPage;
