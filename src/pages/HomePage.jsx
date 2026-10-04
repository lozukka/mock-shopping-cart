import styled from "styled-components";
import { ChevronRight } from "lucide-react";
import heroImage from "../assets/heroImage.jpg";

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 200px;
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
  color: ${(props) => props.theme.colors.primaryFont};
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
`;
const MainHeading = styled.h1`
  font-weight: 500;
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.primaryFont};
  font-size: 44px;
  margin-block: 0;
  line-height: 95%;
`;
const DescriptionText = styled.p`
  color: ${(props) => props.theme.colors.secondaryFont};
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

const ShopLink = styled(LinkButton)`
  background: ${(props) => props.theme.colors.contrast};
  color: ${(props) => props.theme.colors.contrastFont};
`;
const StoryLink = styled(LinkButton)`
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.primaryFont};
  border: 1px solid ${(props) => props.theme.colors.primaryFont};
`;
const HeroRightSide = styled.div`
  display: flex;
  position: relative;
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

function HomePage() {
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
            <ShopLink href="#">
              Shop featured <ChevronRight size={18} />
            </ShopLink>
            <StoryLink href="#">
              Read the story <ChevronRight size={18} />
            </StoryLink>
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
    </>
  );
}

export default HomePage;
