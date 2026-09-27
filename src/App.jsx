import { Link } from "react-router";
import NavBar from "./components/Navbar";

function App() {
  return (
    <>
      <NavBar />
      <Link to="shop">To shop</Link>
    </>
  );
}
export default App;
