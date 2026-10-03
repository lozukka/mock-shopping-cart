import { useContext } from "react";
import { Link } from "react-router";
import { ShoppingBag } from "lucide-react";
import { CartContext } from "../context/CartContext";
import { Handbag } from "lucide-react";
import styled from "styled-components";

const Banner = styled.div`
  background: ${(props) => props.theme.colors.contrast};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const BannerText = styled.p`
  color: ${(props) => props.theme.colors.contrastFont};
  text-transform: uppercase;
`;

function NavBar() {
  const { itemCount } = useContext(CartContext);
  return (
    <>
      <header>
        <Banner>
          <BannerText>A fictional storefront made for learning</BannerText>
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
