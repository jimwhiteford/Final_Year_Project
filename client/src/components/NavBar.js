import React from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import logo from "../honeyLogo.png";
const cookies = new Cookies();

const token = cookies.get("TOKEN");

function NavBar() {
  const logout = () => {
    cookies.remove("TOKEN", { path: "/" });
    window.location.href = "/";
  };

  const login = () => {
    window.location.href = "/login";
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-800 shadow-md">
      <div className="mx-auto px-8">
        <div className="relative flex h-28 items-center justify-between">
          <div className="flex flex-1 justify-start items-center">
            <a href="/" className="flex items-center w-24">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="hidden ml-6 sm:flex">
            <div className="flex space-x-6">
              <a
                href="/apiarys"
                className="bg-yellow-600 text-black hover:bg-yellow-500 px-3 py-2 rounded-md text-lg font-medium no-underline"
              >
                Apiary's
              </a>

              <a
                href="free"
                className="bg-yellow-600 text-black hover:bg-yellow-500 px-3 py-2 rounded-md text-lg font-medium no-underline"
              >
                QR Scan
              </a>
            </div>
          </div>
          <div className="justify-end ml-11 mr-1 ">
            {token ? (
              <span
                onClick={() => logout()}
                className=" text-yellow-600 text-xl font-semibold cursor-pointer hover:text-yellow-500 inline-block"
              >
                Logout
              </span>
            ) : (
              <span
                onClick={() => login()}
                className=" text-yellow-600 text-xl font-semibold cursor-pointer hover:text-yellow-500 inline-block"
              >
                Login
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
