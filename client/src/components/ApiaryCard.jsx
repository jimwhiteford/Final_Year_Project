import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img
          src={post.photo}
          alt={post.title}
          className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <h1 className="text-slate-600 text-center mb-8 text-3xl font-semibold">
        {post.title}
      </h1>
      <div className="text-center">
        <Link to={`/apiarys/${post.slug}`}>
          <span className="transition duration-200 transform hover:-translate-y-1 inline-block hover:bg-yellow-500 bg-yellow-600 text-lg font-medium rounded-full text-white px-8 py-2 mb-4 cursor-pointer">
            See Your Hives
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
