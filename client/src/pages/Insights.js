import React from "react";
import "./Insights.css";
import inRect from "../assets/inRect.png";
import card from "../assets/GradientFill.svg";
import Calendly from "../components/Calendly";

function Insights() {
  return (
    <div className="insightSection">
      <div className="insight-middle">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[36px] font-bold text-gray-800"><span className="text-blue-600">Who</span> We Are?</h1>
          <p>Revolutionizing AI-Powered Experiential Learning</p>
        </div>
        <div className="upperSection">
          <div className="upperSection-s1">
            <div className="card">
              <div className="about-us-content">
                <div className="w-full flex items-center gap-x-3">
                  <img src={inRect} alt="Rect" />
                  <h2 className="2xl">About us</h2>
                </div>
                <p>
                  At Codeate, we leverage AI-driven experiential learning to
                  provide personalized, hands-on opportunities for skill
                  development. Our platform intelligently adapts to your
                  learning pace, guiding you through real-world projects and
                  connecting you with industry professionals. Get ready to gain
                  the practical expertise and insights needed to thrive in
                  today’s fast-evolving tech landscape.
                </p>
              </div>
            </div>
          </div>

          <div className="upperSection-s2">
            <div className="card">
              <div className="vision-content">
                <div className="w-full flex items-center gap-x-3">
                  <img src={inRect} alt="Rect"/>
                  <h2 className="content-row-head text-[36px] font-bold">
                    AI-Enhanced Learning Journey
                  </h2>
                </div>
                <p>
                  At Codeate, we integrate AI-powered tools to create a tailored
                  learning experience. Our platform personalizes your path,
                  ensuring you receive the right resources, projects, and
                  mentorship at every step of your journey. With AI, we make
                  experiential learning more effective, intuitive, and aligned
                  with industry demands.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="mission-content">
                <div className="w-full flex items-center gap-x-3">
                  <img src={inRect} alt="Rect" />
                  <h2>Industry-Ready Projects and Collaboration</h2>
                </div>
                <p>
                  Our platform connects you with real-world projects across
                  various tech domains, developed by peers and guided by
                  industry professionals. Through hands-on, collaborative work,
                  you'll hone your skills, gain valuable exposure, and build a
                  portfolio that sets you apart in the job market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* calendly */}
      <Calendly 
        cardImage={card} 
        calendlyLink="https://calendly.com/contact-codeate/30min" />
    </div>
  );
}

export default Insights;
