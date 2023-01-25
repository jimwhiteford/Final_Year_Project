import { React, useState, useEffect } from "react";
import ApiaryCard from "../components/ApiaryCard";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const user = cookies.get("EMAIL");

export default function Apiarys() {
  const [apiarys, setApiarys] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/getApiarys/${user}`)
      .then((response) => {
        setApiarys(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8 mt-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-black">
        <div className="lg:col-span-8 col-span-1">
          {apiarys.map((post, index) => (
            <ApiaryCard post={post} key={post.title} />
          ))}
        </div>
        {/* <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            test
          </div>
        </div> */}
      </div>
    </div>
  );
}
