import styled from "styled-components";

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
`;

function Footer() {
  return (
    <>
      <footer>
        <div>
          <h3>Common Goods</h3>
          <p>
            A fictional learning project about simple, useful objects for home
            and desk.
          </p>
          <p>Designed somewhere between home and work</p>
        </div>
        <div>
          <div>
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
          </div>
        </div>
        <div>
          <p>© 2026 Common Goods · Concept store</p>
          <div>
            <p>Privacy</p>
            <p>Terms</p>
            <p>Media</p>
          </div>
          <p>Made to learn.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
