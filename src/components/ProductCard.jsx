import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { CircleMinus } from "lucide-react";
import { CirclePlus } from "lucide-react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 160px;
  object-fit: contain;
`;

const AddButton = styled.button`
  background: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.primaryHover};
  }
`;

function ProductCard({ id, title, thumbnail, description, price }) {
  const { cart, addToCart, incrementQty, decrementQty } =
    useContext(CartContext);

  const cartItem = cart.find((item) => item.id === id);

  return (
    <>
      <Card>
        <Thumbnail src={thumbnail} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{price.toFixed(2)}</p>
        {cartItem ? (
          <div>
            <AddButton
              onClick={() => decrementQty(id)}
              aria-label="Decrease quantity"
            >
              <CircleMinus />
            </AddButton>
            <span>{cartItem.quantity}</span>
            <button
              onClick={() => incrementQty(id)}
              aria-label="Increase quantity"
            >
              <CirclePlus />
            </button>
          </div>
        ) : (
          <AddButton onClick={() => addToCart({ id, title, price, thumbnail })}>
            Add to Cart
          </AddButton>
        )}
      </Card>
    </>
  );
}

export default ProductCard;
