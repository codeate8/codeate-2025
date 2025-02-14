import React from "react";
import "./Testimonial.css";
import karthik from "../assets/kartick.png";
import vikas from "../assets/Vikas.png";
import aman from "../assets/aman.png";
import Insights from "./Insights";
import { AnimatedTestimonials } from "../ui/animated-testimonials";


const testimonialsData = [
  {
    quote:
      "Codeate has made my journey as a first time founder so easy. I could completely concentrate on business improvement with Codeate on my side as project handlers. They always had time for any discussion/clarification. So grateful to find them. I defenitely recommend.",
    name: "Karthik Karamsetty",
    designation: "FinoBird",
    src: karthik,
  },
  {
    quote:
      "Hello everyone, I'm Vikas Rai. Recently I attended TezIndia Blockchain Bootcamp 1.0. The Bootcamp was amazing. I didn't have any previous knowledge about Web 3.0.",
    name: "Vikas Rai",
    designation: "Student",
    src: vikas,
  },
  {
    quote:
      "I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad that we at upanyas decided to work with you.",
    name: "Aman",
    designation: "Team Upanyaas",
    src: aman,
  },
];

function Testimonial() {
  return (
    <div className="mContainer">
      <div className="testimonial">
        <div className="flex flex-col lg:flex-row md:flex-row justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-[36px] font-bold text-gray-800 text-center lg:text-left md:text-left"><span className="highlight">
              Number
              <br /></span>
              That Tell Our Story
            </h2>
            <p>
              At Codeate, our numbers reflect the tangible impact we're making.
              From groundbreaking projects to a thriving community of learners
              and professionals, every stat tells the story of our success.
            </p>
          </div>
          <div className="upper-section-right">
            <div className="upper-section-right-elems">
              <h3>150+</h3>
              <p>Colleges</p>
            </div>
            <div className="upper-section-right-elems">
              <h3>125+</h3>
              <p>Projects</p>
            </div>
            <div className="upper-section-right-elems">
              <h3>25+</h3>
              <p>Partners</p>
            </div>
            <div className="upper-section-right-elems">
              <h3>3000+</h3>
              <p>Community Members</p>
            </div>
            <div className="upper-section-right-elems last-element">
              <h3>1000+</h3>
              <p>Opportunities</p>
            </div>
          </div>
        </div>
        <div className="middle-section">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-[36px] font-bold text-gray-800">
              <span className="highlight">Our </span>Testimonials
            </h3>
            <p className="text-xl">About our success stories.</p>
          </div>
          <AnimatedTestimonials
            testimonials={testimonialsData}
            autoplay={true}
          />
        </div>
      </div>
      <Insights />
    </div>
  );
}

export default Testimonial;