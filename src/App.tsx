import { Routes, Route } from "react-router-dom";
import LoginPage from "./modules/Users/pages/LoginPage.tsx";
import DashboardPage from "./modules/Dashboard/pages/DashboardPage.tsx";
import "./App.css";

function App() {
  // LOGIN
  return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
      </Routes>
  );
}

export default App;
