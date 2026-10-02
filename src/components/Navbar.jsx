import { useContext } from "react";
import { Link } from "react-router";
import { ShoppingBag } from "lucide-react";
import { CartContext } from "../context/CartContext";

function NavBar() {
  const { itemCount } = useContext(CartContext);
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="shop">Shop</Link>
      <Link to="cart">
        <ShoppingBag />
        {itemCount > 0 && <span>{itemCount}</span>}
      </Link>
    </>
  );
}

export default NavBar;
