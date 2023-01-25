import { React, useState } from "react";
import axios from "axios";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);
  console.log(register);

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    // set configurations
    const configuration = {
      method: "post",
      url: "http://localhost:3001/register",

      data: {
        email,
        password,
      },
    };
    // make the API call
    axios(configuration)
      .then((result) => {
        setRegister(true);
        window.location.href = "/login";
      })
      .catch((error) => {
        error = new Error();
      });
  };

  return (
    <div onSubmit={(e) => handleSubmit(e)} className="bg-gray-10 ">
      <div className="flex justify-center h-screen w-screen items-center">
        <div className="w-full md:w-1/2 flex flex-col items-center ">
          <h1 className="text-center text-2xl font-bold text-gray-600 mb-6">
            Register
          </h1>

          <div className="w-3/4 mb-6">
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
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 "
              placeholder="Password"
            />

            <div className="w-3/4 flex flex-row justify-between">
              <div className=" flex items-center gap-x-1">
                <input
                  type="checkbox"
                  name="remember"
                  id=""
                  className=" w-4 h-4  "
                />
                <label className="text-sm text-slate-400">Remember me</label>
              </div>
              <div>
                <a
                  href="/register"
                  className="text-sm text-slate-400 hover:text-blue-500"
                >
                  Not Registered?
                </a>
              </div>
            </div>

            <div className="w-3/4 mt-4">
              <button
                type="submit"
                onClick={(e) => handleSubmit(e)}
                className="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700"
              >
                {" "}
                REGISTER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
