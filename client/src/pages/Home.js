import React, { useState, useEffect } from "react";
import "./Home.css";
import PeoplesGrp from '../assets/PeoplesGroup.png';
import Live_Label from '../assets/Live_Label.png'
import About from "../pages/About";
import Card from "./Card";
import ProjectPage from "./projectPage";
import Insights from "./Insights";
import Testimonial from "./Testimonial";
import prfsnl from "../assets/prfsnl.png";

function Home() { 
    const lines = [
       
        "Professionally",
        "Beyond \"Hello World\"",
        "For your career",
    ];
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
            <h1>Doing Projects Made Easy</h1>
            <img className="professional-image" src={prfsnl} alt="professional image" />
            {/* <div className="Home-s1-p1">
            {lines.map((line, index) => (
                    <h1
                        key={index}
                        className={`line ${
                            index === activeIndex ? "visible" : "hidden"
                        }`}
                    >
                        {line}
                    </h1>
                    
                ))}
               
            </div> */}
            <div className="Home-s1-p2"><p>Discover the power of cohort-based courses designed to take your learning to the next level. At Codeate, we combine cutting-edge content with project-based experiential learning, giving you the competitive edge to excel in the tech world. Learn alongside a thriving community and turn knowledge into real-world expertise.</p></div>
            <div className="Home-s1-p3">
            <img src={PeoplesGrp} alt="PeoplesGrp"/>
            <p>+ 3.0k</p>
            <div className="Home-s1-p3-section">
                <img src={Live_Label} alt="Live_Label"/>
                <p>Join Codeate Community of over 3k+ peoples</p> 
            </div>
            </div>
            </div>
            <About/>
            <Card/>
            <ProjectPage/>
            {/* <Insights/> */}
            <Testimonial/>


        </div>
        
    );
}

export default Home;
