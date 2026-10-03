import styled from "styled-components";

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const MainHeading = styled.h1`
  font-weight: 500;
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.primaryFont};
  font-size: 44px;
  margin-block: 0;
  line-height: 95%;
`;
const HeroImage = styled.img`
  width: 100%;
`;

function HomePage() {
  return (
    <>
      <Hero>
        <div>
          <div>
            <hr />
            <p>Objects for the everyday</p>
          </div>
          <MainHeading>Simple things, thoughtfully made.</MainHeading>
          <p>
            A small study in useful objects for calmer homes and clearer desks.
            Nothing extra—just familiar forms, honest materials, and room to
            breathe.
          </p>
          <a href="#">Shop featured</a>
          <a href="#">Read the story</a>
          <div>
            <p>Edition 01</p>
            <hr />
            <p>Autumn / Winter</p>
          </div>
        </div>
        <div>
          <HeroImage
            src="src\assets\pexels-furniture-1840463.jpg"
            alt="Cozy office with a table and two stairs. On the table are notebooks and behind the table is some green plants."
          />
        </div>
      </Hero>
    </>
  );
}

export default HomePage;
