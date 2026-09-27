import { Link } from "react-router";
import { Sun } from "lucide-react";

function App() {
  return (
    <>
      <h2>hello!</h2>
      <Link to="shop">Shop-link</Link>
      <Sun color="red" strokeWidth={3} />
    </>
  );
}

export default App;
