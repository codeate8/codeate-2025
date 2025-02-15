import React from "react";
import "./About.css";
import v1 from "../assets/amazonV.png";
import v2 from "../assets/ciscoV.png";
import v3 from "../assets/deloitteV.png";
import v4 from "../assets/tcsV.png";
import inRect from "../assets/inRect.png";
import TabsComponent from "../components/Tabs";
import Calendly from "../components/Calendly";
import card from "../assets/GradientFill.svg";
import Banner from "../components/Banner";

function About() {
  return (
    <>
      <div>
        <Banner linkName="About" message="Know More About Us"/>
      </div>
      <div className="section">
        <div className="textSection">
          <p>
            Learn from expert mentors with experience at top global companies.
          </p>
        </div>

        <div className="mentorComp">
          <img className="one" src={v1} alt="Amazon " />
          <img className="one" src={v2} alt="Cisco" />
          <img className="one" src={v3} alt="Deloitte" />
          <img className="one" src={v4} alt="Tsc" />
        </div>
      </div>
      <section className="bg-white">
        <div className="upperSection">
          <div className="upperSection-s1">
            <div className="card">
              <div className="about-us-content">
                <div className="content-row">
                  <img src={inRect} alt="Rect" />
                  <h2>About us</h2>
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
                <div className="content-row">
                  <img src={inRect} alt="Rect" />
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
                <div className="content-row">
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
      </section>
      <section className="w-full flex px-6 mb-20">
        <div className="upper-section">
          <div className="upper-section-left">
            <h2 className="text-gray-800 text-[36px] font-bold">
              <span className="highlight">
                Number
                <br />
              </span>
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
      </section>
      <section className="w-full flex flex-col justify-center gap-y-10 mb-10">
        <div className="w-full flex flex-col justify-center items-center gap-y-3 px-2">
            <h2 className="text-gray-900 font-bold text-4xl"><span className="text-blue-600">Main</span> Heading</h2>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi impedit</p>
        </div>
        <div>
            <TabsComponent/>
        </div>
      </section>
      <section>
      <Calendly 
        cardImage={card} 
        calendlyLink="https://calendly.com/contact-codeate/30min" />
      </section>
    </>
  );
}

export default About;
