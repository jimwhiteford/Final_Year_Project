import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
//import Auth from "./components/AuthComponent";
import Free from "./components/FreeComponent";
import Apiarys from "./pages/Apiarys";
import Hives from "./pages/Hives";
import PrivateRoutes from "./PrivateRoutes";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <NavBar className="h-screen overflow-y-scroll " />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/apiarys" element={<Apiarys />} />
          <Route path="/apiarys/:slug" element={<Hives />} />
        </Route>
        <Route path="/free" element={<Free />} />
      </Routes>
    </div>
  );
};

export default App;
