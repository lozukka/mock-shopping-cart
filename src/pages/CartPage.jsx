import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import styled from "styled-components";
import { ShoppingBasket } from "lucide-react";
import { MoveRight } from "lucide-react";
import { Link } from "react-router";

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
const Checkout = styled.a`
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
const ShopLink = styled(Link)`
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

const CartLayout = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    display: flex;
    width: 100%;
    gap: 30px;
  }
`;
const OrderSummary = styled.aside`
  background: ${(props) => props.theme.colors.overlayLight};
  padding: 10px;
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    flex: 1;
  }
`;
const OrderSummaryHeading = styled.h2`
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
const ShoppingCartItems = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    flex: 2;
  }
`;

function CartPage() {
  const { cart, itemCount, total } = useContext(CartContext);

  return (
    <>
      {cart.length === 0 ? (
        <EmptyCart>
          <ShoppingBasket size={200} color="#68704A" strokeWidth={1.25} />
          <CartHeading>Cart is empty</CartHeading>
          <ShopLink to="/shop">Continue shopping</ShopLink>
        </EmptyCart>
      ) : (
        <CartLayout>
          <ShoppingCartItems>
            <CartHeading>Your items</CartHeading>
            <div>
              {cart.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>
          </ShoppingCartItems>
          <OrderSummary>
            <OrderSummaryHeading>Order summary:</OrderSummaryHeading>
            <OrderTotals>
              <span>Products: {itemCount}</span>
              <span>Product total: {total.toFixed(2)} €</span>
              <span>Delivery: free</span>
              <OrderTotal>Order total: {total.toFixed(2)} €</OrderTotal>
              <Checkout href="#">
                Checkout <MoveRight />
              </Checkout>
            </OrderTotals>
          </OrderSummary>
        </CartLayout>
      )}
    </>
  );
}

export default CartPage;
