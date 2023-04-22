import { React, useState } from "react";
import axios from "axios";

export default function Test() {
  const [hiveType, setHiveType] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("test");
    axios
      .get("https://buzz-server-auwi.onrender.com/getHiveTypes")
      .then((response) => {
        setHiveType(response.data);
        console.log(hiveType);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="bg-slate-300 ">
      <div className="flex justify-center h-screen w-screen items-center">
        <div className="w-full md:w-1/2 flex flex-col items-center ">
          <h1 className="text-center text-2xl font-bold text-gray-600 mb-6">
            test
          </h1>

          <div className="w-full mt-3">
            <input
              value="Login"
              type="submit"
              className="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700"
            />
          </div>
        </div>
      </div>
    </form>
  );
}
