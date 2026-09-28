import { Outlet } from "react-router";
import NavBar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <NavBar />
        <Outlet />
      </CartProvider>
    </>
  );
}
export default App;
