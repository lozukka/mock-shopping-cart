import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import "@fontsource-variable/cormorant-garamond";
import "@fontsource-variable/dm-sans";
import { GlobalStyle } from "./styles/GlobalStyle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "shop", element: <ShopPage /> },
      { path: "cart", element: <CartPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </ThemeProvider>,
);
