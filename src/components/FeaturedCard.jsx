import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { CircleMinus } from "lucide-react";
import { CirclePlus } from "lucide-react";
import styled from "styled-components";

const Card = styled.div`
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    padding: 0;
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 160px;
  object-fit: contain;
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
const Title = styled.h3`
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: 600;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    font-size: 15px;
  }
`;
const TextSection = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: 600;
  align-items: center;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    font-size: 15px;
    gap: 5px;
  }
`;
const StatusText = styled.p`
  color: ${(props) => props.theme.colors.secondaryFont};
  font-size: 13px;
  margin-bottom: 10px;
`;
const ModifyButtons = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;
`;
const QuantityText = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

function FeaturedCard({ id, title, thumbnail, availabilityStatus, price }) {
  const { cart, addToCart, incrementQty, decrementQty } =
    useContext(CartContext);

  const cartItem = cart.find((item) => item.id === id);

  return (
    <>
      <Card>
        <Thumbnail src={thumbnail} alt={title} />
        <TextSection>
          <Title>{title}</Title>
          <p>{price.toFixed(2)} €</p>
        </TextSection>
        <StatusText>{availabilityStatus}</StatusText>
        {cartItem ? (
          <ModifyButtons>
            <AddButton
              onClick={() => decrementQty(id)}
              aria-label="Decrease quantity"
            >
              <CircleMinus />
            </AddButton>
            <QuantityText>{cartItem.quantity}</QuantityText>
            <AddButton
              onClick={() => incrementQty(id)}
              aria-label="Increase quantity"
            >
              <CirclePlus />
            </AddButton>
          </ModifyButtons>
        ) : (
          <AddButton onClick={() => addToCart({ id, title, price, thumbnail })}>
            Add to Cart
          </AddButton>
        )}
      </Card>
    </>
  );
}

export default FeaturedCard;
