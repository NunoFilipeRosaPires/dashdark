import { Outlet } from "react-router-dom";
import "./styles/index.scss";

function App() {
  return (
    <div className="dashdark-page">
      <Outlet />
    </div>
  );
}

export default App;
