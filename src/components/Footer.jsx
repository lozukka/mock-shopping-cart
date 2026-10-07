import styled from "styled-components";

const SecondaryLogo = styled.h3`
  color: ${(props) => props.theme.colors.contrastFont};
  text-transform: uppercase;
  font-weight: 900;
  font-size: 18px;
  margin-block: 16px;
`;
const FooterDescriptionText = styled.p`
  color: ${(props) => props.theme.colors.secondaryFont};
  font-size: 13px;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    width: 80%;
  }
`;
const FooterTagline = styled.p`
  color: ${(props) => props.theme.colors.secondaryFont};
  font-size: 11px;
  text-transform: uppercase;
  margin-block: 1rem;
`;
const SecondaryNavHeadings = styled.h4`
  color: ${(props) => props.theme.colors.primaryHover};
  fonst-size: 11px;
  font-weight: 500;
  padding: 24px 0 5px 0;
  margin-block: 0;
`;
const SecondaryNavSection = styled.ul`
  list-style: none;
`;
const SecondaryNavLink = styled.li`
  color: ${(props) => props.theme.colors.overlayLight};
  font-size: 13px;
  font-weight: 400;
  padding: 5px 0;

  &:hover {
    text-decoration: underline;
  }
`;
const SectionLine = styled.hr`
  border: 1px solid ${(props) => props.theme.colors.overlayLight};
  margin-top: 40px;
  margin-bottom: 22px;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    margin-top: 74px;
  }
`;
const Copyright = styled.p`
  color: ${(props) => props.theme.colors.overlayLight};
  font-size: 11px;
  margin-block: 16px;
`;
const LegalLinks = styled.div`
  display: flex;
  gap: 22px;
`;
const LegalLink = styled.a`
  font-size: 11px;
  text-decoration: none;
  color: ${(props) => props.theme.colors.overlayLight};

  &:hover {
    text-decoration: underline;
  }
`;
const ProjectLabel = styled.p`
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.overlayLight};
  font-style: italic;
  font-size: 24px;
  margin-block: 1rem;
`;

const FooterUpper = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    display: flex;
    justify-content: space-between;
    gap: 200px;
  }
`;
const FooterUpperHalf = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;
const SecondaryNavArea = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    display: flex;
    gap: 50px;
    align-self: end;
    padding-right: 50px;
  }
`;
const FooterDown = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

function Footer() {
  return (
    <>
      <footer>
        <FooterUpper>
          <FooterUpperHalf>
            <SecondaryLogo>Common Goods</SecondaryLogo>
            <FooterDescriptionText>
              A fictional learning project about simple, useful objects for home
              and desk.
            </FooterDescriptionText>
            <FooterTagline>
              Designed somewhere between home and work
            </FooterTagline>
          </FooterUpperHalf>
          <FooterUpperHalf>
            <SecondaryNavArea>
              <div>
                <SecondaryNavHeadings>Shop</SecondaryNavHeadings>
                <SecondaryNavSection>
                  <SecondaryNavLink>New arrivals</SecondaryNavLink>
                  <SecondaryNavLink>Home</SecondaryNavLink>
                  <SecondaryNavLink>Desk</SecondaryNavLink>
                  <SecondaryNavLink>Gift cards</SecondaryNavLink>
                </SecondaryNavSection>
              </div>
              <div>
                <SecondaryNavHeadings>About</SecondaryNavHeadings>
                <SecondaryNavSection>
                  <SecondaryNavLink>Our story</SecondaryNavLink>
                  <SecondaryNavLink>Materials</SecondaryNavLink>
                  <SecondaryNavLink>Journal</SecondaryNavLink>
                  <SecondaryNavLink>Learning notes</SecondaryNavLink>
                </SecondaryNavSection>
              </div>
              <div>
                <SecondaryNavHeadings>Help</SecondaryNavHeadings>
                <SecondaryNavSection>
                  <SecondaryNavLink>Shipping</SecondaryNavLink>
                  <SecondaryNavLink>Returns</SecondaryNavLink>
                  <SecondaryNavLink>Care Guide</SecondaryNavLink>
                  <SecondaryNavLink>Contact</SecondaryNavLink>
                </SecondaryNavSection>
              </div>
            </SecondaryNavArea>
          </FooterUpperHalf>
        </FooterUpper>

        <SectionLine />
        <FooterDown>
          <Copyright>© 2026 Common Goods · Concept store</Copyright>
          <LegalLinks>
            <LegalLink href="#">Privacy</LegalLink>
            <LegalLink href="#">Terms</LegalLink>
            <LegalLink href="#">Media</LegalLink>
          </LegalLinks>
          <ProjectLabel>Made to learn.</ProjectLabel>
        </FooterDown>
      </footer>
    </>
  );
}

export default Footer;
