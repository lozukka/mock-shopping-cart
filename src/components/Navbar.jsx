import { useContext } from "react";
import { Link } from "react-router";
import { ShoppingBag } from "lucide-react";
import { CartContext } from "../context/CartContext";
import { Circle } from "lucide-react";
import styled from "styled-components";

const Banner = styled.div`
  background: ${(props) => props.theme.colors.contrast};
  padding: 10px 16px;
`;
const BannerText = styled.p`
  color: ${(props) => props.theme.colors.contrastFont};
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 600;
  text-align: center;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem;
  gap: 11px;
`;
const LogoText = styled.p`
  color: ${(props) => props.theme.colors.primaryFont};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
`;

function NavBar() {
  const { itemCount } = useContext(CartContext);
  return (
    <>
      <header>
        <Banner>
          <BannerText>A fictional storefront made for learning</BannerText>
        </Banner>
        <Logo>
          <Circle
            aria-labe="Circle-logo for the webstore"
            color="#68704A"
            strokeWidth={4}
          />
          <LogoText>Common Goods</LogoText>
        </Logo>
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
