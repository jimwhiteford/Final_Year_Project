import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HiveCard from "../components/HiveCard";
import AddCard from "../components/AddCard";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const user = cookies.get("EMAIL");

export default function Apiarys() {
  const [apiarys, setApiarys] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/getHives/${slug}/${user}`)
      .then((response) => {
        setApiarys(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [slug]);

  return (
    <div className="container mx-auto px-10 mb-8 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-black">
        <div className="md:col-span-7 col-span-1">
          {apiarys.map((post, index) => (
            <HiveCard post={post} key={post.title} />
          ))}
        </div>
        <div className="md:col-span-5 col-span-1">
          <div className="md:sticky relative top-8">
            <AddCard />
          </div>
        </div>
      </div>
    </div>
  );
}
