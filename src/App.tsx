import { Outlet } from "react-router-dom";
import "./styles/index.scss";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className="dashdark-page">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
