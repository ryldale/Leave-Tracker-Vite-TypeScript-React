import { Routes, Route } from "react-router-dom";
import LoginPage from "./modules/Users/pages/LoginPage.tsx";
import DashboardPage from "./modules/Dashboard/pages/DashboardPage.tsx";
import "./App.css";
import DashboardReducer from "./modules/Dashboard/reducers/reducer.ts";
import { initalCombinedState } from "./modules/Dashboard/reducers/reducerInit.ts";
import { useReducer } from "react";


function App() {
  // REDUCER
  const [state, dispatch] = useReducer(DashboardReducer, initalCombinedState);

  // LOGIN
  return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="dashboard" element={<DashboardPage state={state} dispatch={dispatch} />} />
      </Routes>
  );
}

export default App;
