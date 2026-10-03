import { useContext } from "react";
import { Link } from "react-router";
import { ShoppingBag } from "lucide-react";
import { CartContext } from "../context/CartContext";
import { Handbag } from "lucide-react";
import styled from "styled-components";

const Banner = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

function NavBar() {
  const { itemCount } = useContext(CartContext);
  return (
    <>
      <header>
        <Banner>
          <p>A fictional storefront made for learning</p>
        </Banner>
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
