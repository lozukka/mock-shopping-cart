import { Link } from "react-router";
import { ShoppingCart } from "lucide-react";

function NavBar() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="shop">Shop</Link>
      <Link to="cart">
        {" "}
        Cart
        <ShoppingCart />
      </Link>
    </>
  );
}

export default NavBar;
