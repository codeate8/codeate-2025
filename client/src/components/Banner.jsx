import React from "react";
import { Link } from "react-router-dom";
import bgImage from '../assets/bgimg.png'

const Banner = ({ linkName, message }) => {
  return (
    <div
      className="relative flex items-center justify-center h-64 w-full bg-cover bg-center text-gray-800"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-white/90"></div>

      {/* Centered Content */}
      <div className="relative z-10 text-center">
      <p className="mt-4 text-lg pb-8 font-semibold">
          <Link to="/" className="text-gray-800">
            Home
          </Link>
          /<span className="bg-blue-200 px-2 rounded-md text-blue-600">{linkName}</span>
        </p>
        <p className="text-4xl font-bold">
          <span className="text-blue-600">{message.split(" ")[0]}</span>{" "}
          <span className="text-black">{message.split(" ").slice(1).join(" ")}</span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
