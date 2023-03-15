import { React, useState } from "react";
import axios from "axios";
// import FileBase64 from "react-file-base64";

const SaveCard = (props) => {
  const [photo, setPhoto] = useState("");
  const [title, setTitle] = useState("");
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
        alert("Post Created");
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
              Add a new Apiary
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
                {/* <input
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  name="photo"
                  onChange={(e) => setFile(e.target.files[0])}
                ></input> */}
                {/* <FileBase64
                  type="file"
                  multiple={false}
                  onDone={(base64) => setFile(base64)}
                /> */}
                <input
                  className="text-gray-800 px-4 p-2 mb-3 outline-none w-full rounded-lg focus:ring-1 focus: ring-gray-200 bg-gray-100"
                  placeholder="Title"
                  name="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                ></input>
              </div>
            </div>
            <div>
              {/* <JoditEditor
                ref={editor}
                value={content}
                onChange={(newContent) => setContent(newContent)}
              /> */}
            </div>
            <div className="text-center" type="submit">
              <div onClick={sendContent}>
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
