import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import styled from "styled-components";
import { ShoppingBasket } from "lucide-react";
import { MoveRight } from "lucide-react";

const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
`;
const CartHeading = styled.h1`
  font-weight: 500;
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.primaryFont};
  font-size: 44px;
  margin-block: 2rem;
`;
const StyledLink = styled.a`
  text-decoration: none;
  font-weight: 500;
  font-size: 13px;
  text-align: center;
  padding: 15px 22px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: ${(props) => props.theme.colors.contrast};
  color: ${(props) => props.theme.colors.contrastFont};
`;

const ShoppingCart = styled.div``;
const OrderSummarySection = styled.aside`
  background: ${(props) => props.theme.colors.overlayLight};
  padding: 10px;
`;
const OrderSummary = styled.h2`
  font-weight: 500;
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.primaryFont};
  margin-block: 0.5rem;
`;
const OrderTotals = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const OrderTotal = styled.span`
  font-weight: 600;
`;

function CartPage() {
  const { cart } = useContext(CartContext);
  const { itemCount } = useContext(CartContext);
  const { total } = useContext(CartContext);

  return (
    <>
      {cart.length === 0 ? (
        <EmptyCart>
          <ShoppingBasket size={200} color="#68704A" strokeWidth={1.25} />
          <CartHeading>Cart is empty</CartHeading>
          <StyledLink href="#">Continue shopping</StyledLink>
        </EmptyCart>
      ) : (
        <ShoppingCart>
          <div>
            <CartHeading>Your items</CartHeading>
            <div>
              {cart.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>
          </div>
          <OrderSummarySection>
            <OrderSummary>Order summary:</OrderSummary>
            <OrderTotals>
              <span>Products: {itemCount}</span>
              <span>Product total: {total} €</span>
              <span>Delivery: free</span>
              <OrderTotal>Order total: {total} €</OrderTotal>
              <StyledLink href="#">
                Checkout <MoveRight />
              </StyledLink>
            </OrderTotals>
          </OrderSummarySection>
        </ShoppingCart>
      )}
    </>
  );
}

export default CartPage;
