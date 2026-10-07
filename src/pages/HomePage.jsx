import styled from "styled-components";
import { ChevronRight } from "lucide-react";
import heroImage from "../assets/heroImage.jpg";
import { useEffect, useState } from "react";
import { fetchItems } from "../utils/fetchItems";
import FeaturedCard from "../components/FeaturedCard";

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    flex-direction: row;
    align-items: center;
  }
`;
const Line = styled.span`
  display: inline-block;
  width: 32px;
  height: 1px;
  background: ${(props) => props.theme.colors.contrast};
`;
const TaglineText = styled.p`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.contrastDark};
`;
const Eyebrow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const HeroLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    flex: 1;
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
    width: 80%;
  }
`;
const DescriptionText = styled.p`
  color: ${(props) => props.theme.colors.secondaryFont};

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    width: 80%;
  }
`;
const HeroLinks = styled.div`
  display: flex;
  gap: 1rem;
`;
const LinkButton = styled.a`
  text-decoration: none;
  font-weight: 500;
  font-size: 13px;
  text-align: center;
  padding: 15px 22px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const PrimaryLink = styled(LinkButton)`
  background: ${(props) => props.theme.colors.contrast};
  color: ${(props) => props.theme.colors.contrastFont};
`;
const SecondaryLink = styled(LinkButton)`
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.primaryFont};
  border: 1px solid ${(props) => props.theme.colors.primaryFont};
`;
const HeroRightSide = styled.div`
  display: flex;
  position: relative;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    flex: 1;
  }
`;
const HeroImage = styled.img`
  width: 100%;
  border-radius: 16px;
`;
const HeroRightSideLink = styled.a`
  padding: 1rem;
  background: ${(props) => props.theme.colors.overlayDark};
  color: ${(props) => props.theme.colors.contrastFont};
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100px;
  border-radius: 8px;
  position: absolute;
  z-index: 10;
  bottom: 16px;
  left: 16px;
`;
const ImageHeading = styled.h2`
  font-size: 13px;
  font-weight: 500;
`;
const ImageText = styled.p`
  font-size: 11px;
  color: ${(props) => props.theme.colors.overlayLight};
`;

const FeaturedGoods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 40px;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    margin-top: 100px;
    margin-bottom: 88px;
  }
`;
const FeaturedDescriptionSection = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    flex-direction: row;
  }
`;
const FeaturedDescriptionSections = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    flex: 1;
  }
`;
const FeaturedDescriptionSectionsRight = styled(FeaturedDescriptionSections)`
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    align-items: end;
  }
`;
const FeaturedHeading = styled.h2`
  font-weight: 500;
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.primaryFont};
  font-size: 38px;
  margin-block: 1rem;
  line-height: 95%;
`;
const FeaturedDescriptionText = styled(DescriptionText)`
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    text-align: right;
    width: 100%;
    padding-left: 20%;
  }
`;
const FeaturedSecondaryLink = styled(SecondaryLink)`
  width: 50%;
  margin-top: 1rem;
`;
const FeaturedCards = styled.div`
  display: flex;
  flex-direction: column;
  aling-items: center;
  gap: 24px;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 0;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    flex-direction: row;
    justify-content: space-between;
    gap: 24px;
  }
`;

function HomePage() {
  const [itemList, setItemList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadItems() {
      try {
        const results = await fetchItems(4);
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
        <HeroLeftSide>
          <Eyebrow>
            <Line />
            <TaglineText>Objects for the everyday</TaglineText>
          </Eyebrow>
          <MainHeading>Simple things, thoughtfully made.</MainHeading>
          <DescriptionText>
            A small study in useful objects for calmer homes and clearer desks.
            Nothing extra—just familiar forms, honest materials, and room to
            breathe.
          </DescriptionText>
          <HeroLinks>
            <PrimaryLink href="#">
              Shop featured <ChevronRight size={18} />
            </PrimaryLink>
            <SecondaryLink href="#">
              Read the story <ChevronRight size={18} />
            </SecondaryLink>
          </HeroLinks>
        </HeroLeftSide>
        <HeroRightSide>
          <HeroImage
            src={heroImage}
            alt="Cozy office with a table and two stairs. On the table are notebooks and behind the table is some green plants."
          />
          <HeroRightSideLink href="#">
            <div>
              <ImageHeading>The daily desk</ImageHeading>
              <ImageText>Oak, stoneware, recycled paper</ImageText>
            </div>
            <ChevronRight size={18} />
          </HeroRightSideLink>
        </HeroRightSide>
      </Hero>
      <FeaturedGoods>
        <FeaturedDescriptionSection>
          <FeaturedDescriptionSections>
            <Eyebrow>
              <Line />
              <TaglineText>Featured Goods</TaglineText>
            </Eyebrow>
            <FeaturedHeading>
              Useful, familiar, and made to stay.
            </FeaturedHeading>
          </FeaturedDescriptionSections>
          <FeaturedDescriptionSectionsRight>
            <FeaturedDescriptionText>
              A first edit of simple objects for the places where daily life
              happens.
            </FeaturedDescriptionText>
            <FeaturedSecondaryLink href="#">
              View all products <ChevronRight size={18} />
            </FeaturedSecondaryLink>
          </FeaturedDescriptionSectionsRight>
        </FeaturedDescriptionSection>
        <FeaturedCards>
          {itemList.map((item) => (
            <FeaturedCard key={item.id} {...item} />
          ))}
        </FeaturedCards>
      </FeaturedGoods>
    </>
  );
}

export default HomePage;
