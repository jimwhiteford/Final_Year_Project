import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
//import Auth from "./components/AuthComponent";
import QR from "./pages/QR";
import Apiarys from "./pages/Apiarys";
import Hives from "./pages/Hives";
import Hive from "./pages/Hive";
import PrivateRoutes from "./PrivateRoutes";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar className="h-screen overflow-y-scroll " />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/apiarys" element={<Apiarys />} />
              <Route path="/apiarys/:slug" element={<Hives />} />
              <Route path="/apiarys/:apiary/:slug" element={<Hive />} />
            </Route>
            <Route path="/QRscan" element={<QR />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
