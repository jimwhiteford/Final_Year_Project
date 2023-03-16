import { React, useState } from "react";
import axios from "axios";
// import FileBase64 from "react-file-base64";

const SaveCard = (props) => {
  const [photo, setPhoto] = useState("");
  const [title, setTitle] = useState("");
  const [hiveType, setHiveType] = useState("");
  const [breed, setBreed] = useState("");

  //   const [file, setFile] = useState();

  const sendContent = () => {
    const slugTemp = title.replace(/\s+/g, "-").toLowerCase();
    axios
      .post("http://localhost:3001/createApiary", {
        user: props.user,
        title: title,
        slug: slugTemp,
        photo: photo,
      })
      .then((response) => {
        alert("Apiary Created");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sendHiveContent = () => {
    const slugTemp = title.replace(/\s+/g, "-").toLowerCase();
    axios
      .post("http://localhost:3001/createHive", {
        user: props.user,
        apiary: props.slug,
        title: title,
        slug: slugTemp,
        photo: photo,
        hiveType: "",
        breed: "",
        queenId: "",
        queenNote: "",
        hiveNote: "",
        broodBox: "",
        supers: "",
        topBar: "",
      })
      .then((response) => {
        alert("Hive Created");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="lg:col-span-4 col-span-1">
      <div className="lg:sticky relative top-8">
        <div>
          <div className="bg-white shadow-lg rounded-lg p-7 mb-12">
            <h3 className="text-xl mb-7 font-semibold border-b pb-4 text-black">
              {props.slug ? "Add a new hive" : "Add a new apiary"}
            </h3>
            <div>
              <div>
                <input
                  className="text-gray-800 px-4 p-2 mb-4 outline-none w-full rounded-lg focus:ring-1 focus: ring-gray-200 bg-gray-100"
                  placeholder="Photo URL"
                  name="photo"
                  type="text"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                ></input>
                <input
                  className="text-gray-800 px-4 p-2 mb-4 outline-none w-full rounded-lg focus:ring-1 focus: ring-gray-200 bg-gray-100"
                  placeholder="Name"
                  name="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                ></input>
                {props.hiveTypes ? (
                  <div>
                    <select
                      value={hiveType}
                      onChange={(e) => setHiveType(e.target.value)}
                      className="text-gray-800 px-4 p-2 mb-4 outline-none w-full rounded-lg focus:ring-1 focus: ring-gray-200 bg-gray-100"
                    >
                      {props.hiveTypes.map((hive) => (
                        <option key={hive._id} value={hive.hiveModel}>
                          {hive.hiveModel}
                        </option>
                      ))}
                    </select>
                    <select
                      value={breed}
                      onChange={(e) => setBreed(e.target.value)}
                      className="text-gray-800 px-4 p-2 mb-4 outline-none w-full rounded-lg focus:ring-1 focus: ring-gray-200 bg-gray-100"
                    >
                      {props.breeds.map((breed) => (
                        <option key={breed._id} value={breed.breed}>
                          {breed.breed}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>

            <div className="text-center" type="submit">
              <div onClick={props.slug ? sendHiveContent : sendContent}>
                <span className="transition duration-200 transform hover:-translate-y-1 inline-block hover:bg-purple-500 bg-purple-700 text-lg font-medium rounded-full text-white px-8 py-2 mt-7 cursor-pointer">
                  Save
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveCard;