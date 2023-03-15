import { React, useState } from "react";

const HiveDetail = (props) => {
  const [hiveType, setHiveType] = useState("");
  const [queenId, setQueenId] = useState("");
  const [queenNote, setQueenNote] = useState("");
  const [breed, setBreed] = useState("");
  return (
    <div className=" bg-white shadow-lg rounded-lg lg:p-4 mb-2">
      <div className="relative overflow-hidden shadow-md mb-4">
        <img
          src={props.hive.photo}
          alt={props.hive.title}
          className="object-top h-full w-full rounded-t-lg"
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="flex items-center mb-4 w-full"></div>
        <h1 className=" text-slate-600 text-center mb-8 text-3xl font-semibold">
          {props.hive.title}
        </h1>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <p className="text-xl font-semibold">Queen Deatails</p>
        <input
          placeholder="Queen Identifier"
          onChange={(e) => setQueenId(e.target.value)}
          className="text-gray-800 px-4 p-2 mb-4 outline-none w-full rounded-lg focus:ring-1 focus: ring-gray-200 bg-gray-100"
        ></input>
        <select
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          className="text-gray-800 px-4 p-2 mb-4 outline-none w-full rounded-lg focus:ring-1 focus: ring-gray-200 bg-gray-100"
        >
          {props.breed.map((breed) => (
            <option key={breed._id} value={breed.breed}>
              {breed.breed}
            </option>
          ))}
        </select>
        <textarea
          placeholder="Notes"
          onChange={(e) => setQueenNote(e.target.value)}
          className="text-gray-800 px-4 p-2 outline-none w-full rounded-lg focus:ring-1 focus: ring-gray-200 bg-gray-100"
        ></textarea>

        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <p className="text-xl font-semibold">Hive Deatails</p>

        <select
          value={hiveType}
          onChange={(e) => setHiveType(e.target.value)}
          className="text-gray-800 px-4 p-2 mb-4 outline-none w-full rounded-lg focus:ring-1 focus: ring-gray-200 bg-gray-100"
        >
          {props.hiveType.map((hive) => (
            <option key={hive._id} value={hive.hiveModel}>
              {hive.hiveModel}
            </option>
          ))}
        </select>

        {hiveType === "Layens" || "Horizontal" ? (
          <div>
            <input
              type="number"
              placeholder="Number of Top Bars"
              className="text-gray-800 px-4 p-2 mb-4 outline-none w-full rounded-lg focus:ring-1 focus: ring-gray-200 bg-gray-100"
            ></input>
          </div>
        ) : (
          <div>
            <input
              type="number"
              placeholder="Number of Brood Box's"
              className="text-gray-800 px-4 p-2 mb-4 outline-none w-full rounded-lg focus:ring-1 focus: ring-gray-200 bg-gray-100"
            ></input>
            <input
              type="number"
              placeholder="Number of Supers"
              className="text-gray-800 px-4 p-2 mb-4 outline-none w-full rounded-lg focus:ring-1 focus: ring-gray-200 bg-gray-100"
            ></input>
          </div>
        )}

        <div className="text-center">
          <button>
            <span className="transition duration-200 transform hover:-translate-y-1 inline-block hover:bg-yellow-500 bg-yellow-600 text-lg font-medium rounded-full text-white px-8 py-2 mb-1 cursor-pointer">
              Save Details
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HiveDetail;
