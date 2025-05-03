import { UsersContext } from "../context/UsersContext";
import { useContext } from "react";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Footer from "./Footer";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Pizza from "../pages/Pizza";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Profile from "./Profile";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  const { token } = useContext(UsersContext);
  console.log("rutas", token);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={token ? <Navigate to="/" /> : <Register />}
        />
        <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <Login />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route
          path="/profile"
          element={token ? <Profile /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
