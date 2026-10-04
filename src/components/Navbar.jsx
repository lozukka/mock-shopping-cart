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
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    margin: 1rem 0;
  }
`;
const LogoText = styled.p`
  color: ${(props) => props.theme.colors.primaryFont};
  text-transform: uppercase;
  font-weight: 900;
  font-size: 18px;
`;
const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.primaryFont};
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
  &:active {
    text-decoration: underline;
  }
`;
const StyledLinkCart = styled(Link)`
  color: ${(props) => props.theme.colors.primaryFont};
  text-decoration: none;
  font-weight: 600;
  display: flex;
  gap: 5px;
`;
const DesktopNav = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 72px;
  }
`;

function NavBar() {
  const { itemCount } = useContext(CartContext);
  return (
    <>
      <header>
        <Banner>
          <BannerText>A fictional storefront made for learning</BannerText>
        </Banner>
        <DesktopNav>
          <Logo>
            <Circle
              aria-label="Circle-logo for the webstore"
              color="#68704A"
              strokeWidth={4}
            />
            <LogoText>Common Goods</LogoText>
          </Logo>
          <nav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="shop">Shop</StyledLink>
            <StyledLinkCart to="cart">
              <ShoppingBag aria-label="Shopping bag" strokeWidth={2} />
              {itemCount > 0 && <span>{itemCount}</span>}
            </StyledLinkCart>
          </nav>
        </DesktopNav>
      </header>
    </>
  );
}

export default NavBar;
