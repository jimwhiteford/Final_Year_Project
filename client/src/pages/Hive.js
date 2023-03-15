import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HiveDetail from "../components/HiveDetail";
import AddCard from "../components/AddCard";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const user = cookies.get("EMAIL");

export default function Apiarys() {
  const [hive, setHive] = useState([]);
  const params = useParams();
  const apiary = params.apiary;
  const slug = params.slug;

  useEffect(() => {
    axios
      .get(`http://localhost:3001/getHive/${apiary}/${slug}/${user}`)
      .then((response) => {
        setHive(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [slug, apiary]);

  return (
    <div className="container mx-auto px-10 mb-8 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-black">
        <div className="md:col-span-7 col-span-1">
          <HiveDetail post={hive} />
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
