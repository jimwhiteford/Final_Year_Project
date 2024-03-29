import { React, useState } from "react";
import axios from "axios";
import { URL } from "../App";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  console.log(register);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(email, password));
    if (Object.keys(formErrors).length > 0 || !email || !password) {
    } else {
      const configuration = {
        method: "post",
        url: `${URL}/register`,

        data: {
          email,
          password,
        },
      };
      axios(configuration)
        .then((result) => {
          setRegister(true);
          window.location.href = "/login";
        })
        .catch((error) => {
          error = new Error();
          alert("couldnt register");
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
    <div onSubmit={(e) => handleSubmit(e)}>
      <div className="flex justify-center h-screen w-screen items-center">
        <div className="w-3/4 md:w-1/2 flex flex-col items-center rounded-lg border shadow-lg bg-slate-50">
          <h1 className="text-center text-2xl font-bold text-gray-600 mb-6 mt-6">
            Register
          </h1>

          <div className="w-3/4 mb-6">
            <p className="text-red-500">{formErrors.email}</p>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-4 px-8 bg-slate-300 placeholder:font-semibold rounded hover:ring-1 outline-yellow-500"
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
              className="w-full py-4 px-8 bg-slate-300 placeholder:font-semibold rounded hover:ring-1 outline-yellow-500 "
              placeholder="Password"
            />

            <div className="w-full mt-16">
              <button
                type="submit"
                onClick={(e) => handleSubmit(e)}
                className="py-4 bg-yellow-500 w-full rounded font-bold hover:bg-yellow-400"
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
