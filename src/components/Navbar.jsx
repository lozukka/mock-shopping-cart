import { Link } from "react-router";

function NavBar() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="shop">Shop</Link>
      <Link to="cart">Cart</Link>
    </>
  );
}

export default NavBar;
