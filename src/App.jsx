import { Outlet } from "react-router";
import NavBar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <CartProvider>
        <NavBar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </CartProvider>
    </>
  );
}
export default App;
