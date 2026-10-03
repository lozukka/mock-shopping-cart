import { useContext } from "react";
import { Link } from "react-router";
import { ShoppingBag } from "lucide-react";
import { CartContext } from "../context/CartContext";
import { Handbag } from "lucide-react";

function NavBar() {
  const { itemCount } = useContext(CartContext);
  return (
    <>
      <header>
        <div>
          <p>A fictional storefront made for learning</p>
        </div>
        <div>
          <Handbag />
          <p>Common Goods</p>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="shop">Shop</Link>
          <Link to="cart">
            <ShoppingBag aria-label="Shopping bag" />
            {itemCount > 0 && <span>{itemCount}</span>}
          </Link>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
