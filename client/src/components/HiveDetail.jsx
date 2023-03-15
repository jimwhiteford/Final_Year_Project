import React from "react";

const HiveDetail = ({ post }) => {
  return (
    <div className=" bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md mb-6">
        <img
          src={post.photo}
          alt={post.title}
          className="object-top h-full w-full rounded-t-lg"
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="flex items-center mb-8 w-full"></div>
        <h1 className="text-slate-600 text-center mb-8 text-3xl font-semibold">
          {post.title}
        </h1>

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
