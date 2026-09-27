import { Outlet } from "react-router";
import NavBar from "./components/Navbar";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
export default App;
