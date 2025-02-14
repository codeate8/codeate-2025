import React from "react";
import "./About.css";
import v1 from "../assets/amazonV.png";
import v2 from "../assets/ciscoV.png";
import v3 from "../assets/deloitteV.png";
import v4 from "../assets/tcsV.png";

function HomeAbout() {
  return (
    <>
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
    </>
  );
}

export default HomeAbout;
