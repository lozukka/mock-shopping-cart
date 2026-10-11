import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import styled from "styled-components";
import { ShoppingBasket } from "lucide-react";

const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
`;
const EmptyCartHeading = styled.h1`
  font-weight: 500;
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.primaryFont};
  font-size: 44px;
  margin-block: 2rem;
`;
const ContiueShopping = styled.a`
  text-decoration: none;
  font-weight: 500;
  font-size: 13px;
  text-align: center;
  padding: 15px 22px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
  background: ${(props) => props.theme.colors.contrast};
  color: ${(props) => props.theme.colors.contrastFont};
`;

function CartPage() {
  const { cart } = useContext(CartContext);

  return (
    <>
      {cart.length === 0 ? (
        <EmptyCart>
          <ShoppingBasket size={200} color="#68704A" strokeWidth={1.25} />
          <EmptyCartHeading>Cart is empty</EmptyCartHeading>
          <ContiueShopping href="#">Continue shopping</ContiueShopping>
        </EmptyCart>
      ) : (
        <div>
          <div>
            <h1>Your items</h1>
            <div>
              {cart.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>
          </div>
          <aside>
            <h2>Order summary:</h2>
            <div>
              <span>1 product</span>
              <span>Product total 50€</span>
              <span>Delivery: free</span>
              <span>Total: 50€</span>
              <a href="#">Checkout -</a>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

export default CartPage;
