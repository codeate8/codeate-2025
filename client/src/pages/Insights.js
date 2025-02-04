import React from "react";
import "./Insights.css";
import bg from '../assets/backDaim.png';
import editLogo from '../assets/editLogo.png';
import bg2 from '../assets/sectionBg.png';
import inRect from "../assets/inRect.png";
import card from "../assets/GradientFill.svg";


function Insights(){
    return(
        <div className="insightSection">
        <div className="insight-middle">

        
         <div className="upperSection-head">
                <h1 className="text-[36px] font-bold">Who We Are?</h1>
                <p>Revolutionizing AI-Powered Experiential Learning</p>
                </div>
            <div className="upperSection">
            
                <div className="upperSection-s1">
                <div className="card">              
                <div className="about-us-content">          
                <div className="content-row">
                <img src={inRect} alt="Rect"/>
                <h2>About us</h2>
                </div>
                <p>At Codeate, we leverage AI-driven experiential learning to provide personalized, hands-on opportunities for skill development. Our platform intelligently adapts to your learning pace, guiding you through real-world projects and connecting you with industry professionals. Get ready to gain the practical expertise and insights needed to thrive in today’s fast-evolving tech landscape.</p>
                </div>
                </div>
                </div>

                <div className="upperSection-s2">
                <div className="card">
                <div className="vision-content">
                <div className="content-row">
                <img src={inRect} alt="Rect"/>
                <h2 className="content-row-head text-[36px] font-bold">AI-Enhanced Learning Journey</h2>
                </div>
                <p>
                At Codeate, we integrate AI-powered tools to create a tailored learning experience. Our platform personalizes your path, ensuring you receive the right resources, projects, and mentorship at every step of your journey. With AI, we make experiential learning more effective, intuitive, and aligned with industry demands.
                </p>
                </div>

                </div>
                <div className="card">
                <div className="mission-content">
                
                <div className="content-row">
                <img src={inRect} alt="Rect"/>
                <h2>Industry-Ready Projects and Collaboration</h2>
                </div>
                <p>
                Our platform connects you with real-world projects across various tech domains, developed by peers and guided by industry professionals. Through hands-on, collaborative work, you'll hone your skills, gain valuable exposure, and build a portfolio that sets you apart in the job market.
                </p>
                </div>         
                </div>
                </div>
            </div> 
            </div>
            <div className="lower-card">
  <img className="card-image" src={card} alt="card" />
  <div className="content-inside">
    <div className="left-section">
      <h3 className="left-section-head3 text-[50px] font-bold">Want to connect with us?</h3>
      <p>Let's do this</p>
    </div>
    <div className="right-section">
  <a href="https://linktr.ee/krishnenduSamanta" target="_blank" rel="noopener noreferrer">
    <p>Book a call on Calendly</p> 
  </a>
</div>
  </div>
</div>

        </div>
    );
}

export default Insights;