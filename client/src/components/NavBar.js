import React from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
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
    <nav class="bg-black">
      <div class="mx-auto px-8">
        <div class="relative flex h-20 items-center justify-between">
          <div class="flex flex-1 items-center justify-center sm:justify-start">
            <div class="flex items-center">
              <a
                href="/"
                class="block text text-yellow-600 hover:text-yellow-500 font-bold text-6xl mr-5 no-underline"
              >
                Buzz
              </a>
            </div>
            <div class="ml-6 mt-1">
              <div class="flex space-x-6">
                <a
                  href="/auth"
                  class="bg-yellow-600 text-black hover:bg-yellow-500 px-3 py-2 rounded-md text-lg font-medium no-underline"
                >
                  Apiary's
                </a>

                <a
                  href="free"
                  class="bg-yellow-600 text-black hover:bg-yellow-500 px-3 py-2 rounded-md text-lg font-medium no-underline"
                >
                  QR Scan
                </a>
              </div>
            </div>
          </div>
          <div className="justify-end">
            {token ? (
              <span
                onClick={() => logout()}
                className=" text-yellow-600 mr-4 text-xl font-semibold cursor-pointer hover:text-yellow-500 inline-block"
              >
                Logout
              </span>
            ) : (
              <span
                onClick={() => login()}
                className=" text-yellow-600 mr-4 text-xl font-semibold cursor-pointer hover:text-yellow-500 inline-block"
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
