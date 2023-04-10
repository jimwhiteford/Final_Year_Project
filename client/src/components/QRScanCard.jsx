import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HiveCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        QR scanner
      </div>

      <div className="text-center">
        <Link>
          <span className="transition duration-200 transform hover:-translate-y-1 inline-block hover:bg-yellow-500 bg-yellow-600 text-lg font-medium rounded-full text-white px-8 py-2 mb-2 cursor-pointer">
            Take scan
          </span>
        </Link>
      </div>
      <div className="text-center cursor-pointer p-3 text-xl hover:text-red-700"></div>
    </div>
  );
};

export default HiveCard;
