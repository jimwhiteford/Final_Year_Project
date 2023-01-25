import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Auth from "./components/AuthComponent";
import Free from "./components/FreeComponent";
import PrivateRoutes from "./PrivateRoutes";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <NavBar className="h-screen overflow-y-scroll bg-teal-50" />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/auth" element={<Auth />} />
        </Route>
        <Route path="/free" element={<Free />} />
      </Routes>
    </div>
  );
};

export default App;
