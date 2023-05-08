import { React, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [error, setError] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  console.log(login);
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    setFormErrors(validate(email, password));
    if (Object.keys(formErrors).length > 0 || !email || !password) {
    } else {
      const configuration = {
        method: "post",
        url: "https://buzz-server-auwi.onrender.com/login",
        data: {
          email,
          password,
        },
      };
      axios(configuration)
        .then((result) => {
          setLogin(true);
          cookies.set("TOKEN", result.data.token, {
            path: "/",
          });
          cookies.set("EMAIL", result.data.email, {
            path: "/",
          });
          window.location.href = "/";
        })
        .catch((error) => {
          error = new Error();
          console.log("not any email or password");
          setError(true);
        });
    }
  };

  const validate = (email, password) => {
    const errors = {};

    if (!password) {
      errors.password = "Password is required!";
    }
    if (!email) {
      errors.email = "Email is required!";
    }
    return errors;
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="bg-slate-300 ">
      <div className="flex justify-center h-screen w-screen items-center">
        <div className="w-full md:w-1/2 flex flex-col items-center ">
          <h1 className="text-center text-2xl font-bold text-gray-600 mb-6">
            LOGIN
          </h1>

          <div className="w-3/4 mb-6">
            {error === true ? (
              <p className="text-red-500">
                Email or Password could not be found.
              </p>
            ) : (
              <></>
            )}
            <p className="text-red-500">{formErrors.email}</p>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
              placeholder="Email"
            />
          </div>

          <div className="w-3/4 mb-6">
            <p className="text-red-500">{formErrors.password}</p>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 "
              placeholder="Password"
            />

            <div className="w-3/4 flex flex-row justify-between mt-7">
              <div>
                <a
                  href="/register"
                  className="text-md text-slate-800 hover:text-blue-500"
                >
                  Not Registered?
                </a>
              </div>
            </div>

            <div className="w-full mt-3">
              <input
                value="Login"
                type="submit"
                className="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
