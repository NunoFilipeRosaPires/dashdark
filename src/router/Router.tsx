import { Route, Routes } from "react-router-dom";
import App from "../App";
import { Dashboard } from "../pages/Dashboard";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Dashboard />} />
        {/* <Route path="messages" element={<DashboardMessages />} /> */}
      </Route>
    </Routes>
  );
};
