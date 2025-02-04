import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./projectPage.css";
import P1 from "../assets/p1.png";
import P2 from "../assets/p2.png";
import P3 from "../assets/p3.png";
import P4 from "../assets/tezos.png";
import P5 from "../assets/p5.png";
import editLogo from '../assets/editLogo.png';
import bg2 from '../assets/sectionBg.png';
import inRect from "../assets/inRect.png";


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
    <div>
    <div className="project-page">
    <h1 className="project-header text-[36px] font-bold">
  <span className="highlight">Our</span> Flagship Projects
</h1>

    <p>
      Real-World Innovation, Powered by Our Community
    </p>
    <div className="project-gallery">
      <Slider {...settings}>
        <div className="slider-item">
          <img src={P1} alt="Project 1" />
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
   <div className="lowerSection">
              <img className="bg2Image" src={bg2} alt="background"/>
    <h2 className="lowerSection-title text-[36px] font-bold"><span className="highlight text-[36px] font-bold">Why</span> Choose Us</h2>
    <div className="lowerSection-grid">
    <div className="lowerSection-item">
    <div className="lowerSection-content">
      <img src={editLogo} alt="edit logo" />
      <p>Project Building Opportunities</p>
    </div>
  </div>
  
      <div className="lowerSection-item">
      <div className="lowerSection-content">
      <img src={editLogo} alt="edit logo"/>
      <p>Hands-on Learning</p>
      </div>
      </div>
  
      <div className="lowerSection-item">
      <div className="lowerSection-content">
      <img src={editLogo} alt="edit logo"/>
      <p>Direct Industry Connect</p>
      </div>
      </div>
  
      <div className="lowerSection-item">
      <div className="lowerSection-content">
      <img src={editLogo} alt="edit logo"/>
      <p>Internships</p>
      </div>
      </div>
  
      <div className="lowerSection-item">
      <div className="lowerSection-content">
      <img src={editLogo} alt="edit logo"/>
      <p>Certifications</p>
      </div>
      </div>
  
      <div className="lowerSection-item">
      <div className="lowerSection-content">
      <img src={editLogo} alt="edit logo"/>
      <p>24×7 Community Support</p>
      </div>
        
      </div>
    </div>
  </div>
  </div>
    
  );
}

export default ProjectPage;
