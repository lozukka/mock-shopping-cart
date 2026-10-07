import { useEffect, useState } from "react";
import { fetchItems } from "../utils/fetchItems";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 40px;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    margin-top: 100px;
    margin-bottom: 88px;
    gap: 48px;
  }
`;

const MainHeading = styled.h1`
  font-weight: 500;
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.primaryFont};
  font-size: 44px;
  margin-block: 0;
  line-height: 95%;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    width: 50%;
  }
`;

const DescriptionText = styled.p`
  color: ${(props) => props.theme.colors.secondaryFont};

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    width: 40%;
  }
`;
const ProductCards = styled.div`
  display: flex;
  flex-direction: column;
  aling-items: center;
  gap: 24px;
  margin-bottom: 40px;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 0;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    gap: 24px;
    margin-top: 100px;
    margin-bottom: 88px;
  }
`;

function ShopPage() {
  const [itemList, setItemList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadItems() {
      try {
        const results = await fetchItems(20);
        setItemList(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    loadItems();
  }, []);

  if (loading) return <p>Loading items...</p>;
  if (error) return <p>Something went wrong: {error}</p>;

  return (
    <>
      <Hero>
        <MainHeading>Useful, familiar, and made to stay.</MainHeading>
        <DescriptionText>
          A first edit of simple objects for the places where daily life
          happens.
        </DescriptionText>
      </Hero>

      <ProductCards>
        {itemList.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </ProductCards>
    </>
  );
}
export default ShopPage;
