import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import DetailUser from "../pages/DetailUser";

export default function AppRoutes() {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  return (
    <Routes>
      {/* LOGIN */}
      <Route
        path="/"
        element={isLoggedIn ? <Navigate to="/dashboard" replace /> : <Login />}
      />

      {/* DASHBOARD */}
      <Route
        path="/dashboard"
        element={isLoggedIn ? <Dashboard /> : <Navigate to="/" replace />}
      />

      {/* DETAIL USER */}
      <Route
        path="/detail/:id"
        element={isLoggedIn ? <DetailUser /> : <Navigate to="/" replace />}
      />
    </Routes>
  );
}
