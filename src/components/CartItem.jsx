import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { CircleMinus } from "lucide-react";
import { CirclePlus } from "lucide-react";
import { Trash } from "lucide-react";
import styled from "styled-components";

const CartItemCard = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
`;
const Thumbnail = styled.img`
  width: 100px;
  height: auto;
  object-fit: contain;
`;
const Wrapper = styled.div`
  align-self: flex-end;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Title = styled.h3`
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: 600;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    font-size: 15px;
  }
`;
const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ModifyQty = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const ModifyCtyButtons = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;
const AddButton = styled.button`
  background: ${(props) => props.theme.colors.contrast};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.secondaryFont};
  }
`;
const RemoveButton = styled.button`
  color: ${(props) => props.theme.colors.primaryFont};
  background: ${(props) => props.theme.colors.backgroundLight};
  border: none;
  border-radius: 4px;
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.secondaryFont};
  }
`;
const QuantityText = styled.span`
  font-size: 18px;
  font-weight: 500;
`;
const Total = styled.span`
  font-size: 18px;
  font-weight: 500;
  align-self: flex-end;
`;
const Line = styled.hr`
  background: ${(props) => props.theme.colors.contrast};
  margin: 10px;
`;

function CartItem({ id, title, thumbnail, price, quantity }) {
  const { removeItem, incrementQty, decrementQty } = useContext(CartContext);

  return (
    <>
      <CartItemCard>
        <Thumbnail src={thumbnail} alt={title} />
        <Wrapper>
          <ProductInfo>
            <Title>{title}</Title>
            <RemoveButton
              onClick={() => removeItem(id)}
              aria-label="Remove item from cart"
            >
              <Trash />
            </RemoveButton>
          </ProductInfo>
          <ModifyQty>
            <ModifyCtyButtons>
              <AddButton
                onClick={() => decrementQty(id)}
                aria-label="Decrease quantity"
              >
                <CircleMinus />
              </AddButton>
              <QuantityText>{quantity}</QuantityText>
              <AddButton
                onClick={() => incrementQty(id)}
                aria-label="Increase quantity"
              >
                <CirclePlus />
              </AddButton>
            </ModifyCtyButtons>
            <p>Unit price: {price} €</p>
          </ModifyQty>

          <Total>Total: {(price * quantity).toFixed(2)} €</Total>
        </Wrapper>
      </CartItemCard>
      <Line />
    </>
  );
}

export default CartItem;
