import React, { useState, useEffect } from "react";
import "./Home.css";
import PeoplesGrp from "../assets/PeoplesGroup.png";
import Live_Label from "../assets/Live_Label.png";
import HomeAbout from "../pages/HomeAbout";
import Card from "../components/card/Card";
import ProjectPage from "./projectPage";
import Testimonial from "./Testimonial";

function Home() {
  const lines = ["Professionally", 'Beyond "Hello World"', "For your career"];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % lines.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [lines.length]);

  return (
    <div className="Main-container">
      <div className="Home-s1">
        <div className="w-full flex flex-col justify-center items-center gap-y-3">
          <h1 className="text-4xl lg:text-6xl text-center font-extrabold text-gray-800">Doing Projects Made Easy</h1>
          <p className="text-4xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-500 to-indigo-400 bg-clip-text text-transparent">Professionally</p>
        </div>
        
        <div className="Home-s1-p2">
          <p>
            Discover the power of cohort-based courses designed to take your
            learning to the next level. At Codeate, we combine cutting-edge
            content with project-based experiential learning, giving you the
            competitive edge to excel in the tech world. Learn alongside a
            thriving community and turn knowledge into real-world expertise.
          </p>
        </div>
        <div className="w-full flex flex-col lg:flex-row md:flex-row justify-center items-center py-12 px-6 gap-6">
          <div className="flex justify-between items-center">
            <img src={PeoplesGrp} alt="PeoplesGrp" className="w-3/5" />
            <p className="text-md lg:text-xl font-bold">+ 3.0k</p>
          </div>
          <div className="flex justify-between items-center shadow-lg bg-gray-100 pr-4 rounded-full">
            <img src={Live_Label} alt="Live_Label" />
            <p>Join Codeate Community of over 3k+ peoples</p>
          </div>
        </div>
      </div>
      <HomeAbout />
      <Card />
      <ProjectPage />
      {/* <Insights/> */}
      <Testimonial />
    </div>
  );
}

export default Home;
