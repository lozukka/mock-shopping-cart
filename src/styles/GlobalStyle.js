import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${(props) => props.theme.fonts.body};
    background: ${(props) => props.theme.colors.backgroundLight};
  }

  header {
  border-bottom: 2px solid ${(props) => props.theme.colors.line}
  }

  nav {
  padding: 0 16px 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px }

  main {
  margin: 16px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
   main{
   margin: 54px 72px;}
  }
`;
