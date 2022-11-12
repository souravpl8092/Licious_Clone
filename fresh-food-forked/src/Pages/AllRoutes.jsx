import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../Components/PrivateRoute";
import About from "./About";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Login from "./Login";
import Settings from "./Settings";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard/:settings"
        element={
          <PrivateRoute>
            <Settings />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
// :id

export default AllRoutes;
