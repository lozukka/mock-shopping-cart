import { Link } from "react-router";
import { ShoppingCart } from "lucide-react";

function NavBar() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="shop">Shop</Link>
      <Link to="cart">
        <ShoppingCart />
      </Link>
    </>
  );
}

export default NavBar;
