import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./projectPage.css";
import P1 from "../assets/p1.png";
import P2 from "../assets/p8.png";
import P3 from "../assets/p3.png";
import P4 from "../assets/p9.png";
import P5 from "../assets/p5.png";
import editLogo from "../assets/editLogo.png";
import bg2 from "../assets/bgimg.png";

function ProjectPage() {
  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    focusOnSelect: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="pb-12">
      <div className="">
        <div className="w-full flex flex-col justify-center items-center mb-8">
          <h1 className="text-gray-800 text-[36px] font-bold text-center">
            <span className="text-blue-600">Our</span> Flagship Projects
          </h1>
          <p className="text-xl text-center">
            Real-World Innovation, Powered by Our Community
          </p>
        </div>

        <div className="project-gallery">
          <Slider {...settings}>
            <div className="slider-item">
              <img src={P1} alt="Project 1" className="h-1/3" />
            </div>
            <div className="slider-item">
              <img src={P2} alt="Project 2" />
            </div>
            <div className="slider-item">
              <img src={P3} alt="Project 3" />
            </div>
            <div className="slider-item">
              <img src={P4} alt="Project 4" />
            </div>
            <div className="slider-item">
              <img src={P5} alt="Project 5" />
            </div>
          </Slider>
        </div>
      </div>
      <div
        className="bg-[#000c24] relative bg-cover bg-center bg-no-repeat py-1 mt-10"
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/5"></div>
        {/* <img className="bg2Image" src={bg2} alt="background" /> */}
        <h2 className="mb-8 text-[36px] font-bold text-center text-gray-100">
          <span className="highlight font-bold z-20">Why</span> Choose Us
        </h2>
        <div className="lowerSection-grid px-4 text-gray-100">
          <div className="relative flex gap-x-8 rounded-md border-2 border-transparent bg-transparent p-3 overflow-hidden before:absolute before:inset-0 before:border-2 before:border-transparent before:rounded-lg before:animate-outline-spin">
            <img src={editLogo} alt="edit logo" className="w-8 aspect-square" />
            <p className="text-center text-sm font-semibold mt-2">
              Project Building Opportunities
            </p>
          </div>

          <div className="relative flex gap-x-8 rounded-md border-2 border-transparent bg-transparent p-3 overflow-hidden before:absolute before:inset-0 before:border-2 before:border-transparent before:rounded-lg before:animate-outline-spin">
            <img src={editLogo} alt="edit logo" className="w-8 aspect-square" />
            <p className="text-center text-sm font-semibold mt-2">
              Hands on Learning
            </p>
          </div>

          <div className="relative flex items-center gap-x-8 rounded-md border-2 border-transparent bg-transparent p-3 overflow-hidden before:absolute before:inset-0 before:border-2 before:border-transparent before:rounded-lg before:animate-outline-spin">
            <img src={editLogo} alt="edit logo" className="w-8 aspect-square" />
            <p className="text-center text-sm font-semibold mt-2">
              Direct Industry Connect
            </p>
          </div>

          <div className="relative flex items-center gap-x-8 rounded-md border-2 border-transparent bg-transparent p-3 overflow-hidden before:absolute before:inset-0 before:border-2 before:border-transparent before:rounded-lg before:animate-outline-spin">
            <img src={editLogo} alt="edit logo" className="w-8 aspect-square" />
            <p className="text-center text-sm font-semibold mt-2">
              Internships
            </p>
          </div>

          <div className="relative flex gap-x-8 rounded-md border-2 border-transparent bg-transparent p-3 overflow-hidden before:absolute before:inset-0 before:border-2 before:border-transparent before:rounded-lg before:animate-outline-spin">
            <img src={editLogo} alt="edit logo" className="w-8 aspect-square" />
            <p className="text-center text-sm font-semibold mt-2">
              Certification
            </p>
          </div>

          <div className="relative flex items-center gap-x-8 rounded-md border-2 border-transparent bg-transparent p-3 overflow-hidden before:absolute before:inset-0 before:border-2 before:border-transparent before:rounded-lg before:animate-outline-spin">
            <img src={editLogo} alt="edit logo" className="w-8 aspect-square" />
            <p className="text-center text-sm font-semibold mt-2">
              24x7 Community Support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
