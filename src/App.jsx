import { Outlet } from "react-router";
import NavBar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <NavBar />
        <main>
          <Outlet />
        </main>
      </CartProvider>
    </>
  );
}
export default App;
