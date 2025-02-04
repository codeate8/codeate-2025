import React from 'react';
import "./Card.css";
import learnCard from "../assets/learnRef.png";
import buildCard from "../assets/buildRef.png"
import comCard from "../assets/communityRef.png";
import cardRect1 from "../assets/cardRect.png";
import cardRect2 from "../assets/cardRectleft.png";

function Card() {
    return(
        <div className='fullCard'>
        <div className='card-desc'>
        <h2 className='card-desc-header text-[36px] font-bold'><span className='highlight'>The </span>Codeate Experience
</h2>
<p>
Learn, Build & Grow Together.

</p>
        </div>
        
            <div className='learn'>
            <div>
                <img className='to-dim' src={cardRect1} alt='card Rectangle'/>
            </div>
            <div className='left'>
                <img src={learnCard} alt='Card'/>
            </div>
            <div className='right'>
            <div className='paragraph-Div'>
                <h2>Learn</h2>
                <p></p>
                <h3>Elevate Your Skills with Experiential Learning.</h3>
                
                <p className='const'>Discover the power of cohort-based courses designed to take your learning to the next level. At Codeate, we combine cutting-edge content with project-based experiential learning, giving you the competitive edge to excel in the tech world. Learn alongside a thriving community and turn knowledge into real-world expertise.</p>
                <a href="#"><h3>Learn More</h3></a>
                </div>       
            </div>
            </div> 

            <div className='learn'>
                <div className='left'>
                <div className='paragraph-Div'>
                <h2>Build</h2>
                <p></p>
                <h3>AI-Powered Projects. Real-World Skills. Certified Success.</h3>
                
                <p>Unleash your potential with our AI-powered Build program, designed to offer personalized, project-based learning in the most industry-relevant tech stacks. Gain hands-on experience, validate your expertise with impactful certifications, and elevate your career with the future of learning—powered by AI.</p>
                <a href="#"><h3>Learn More</h3></a>
                </div>
                </div>
                <div className='right'>
                    <img src={buildCard} alt='card'/>
                </div>
                <div>
                <img className='to-dim' src={cardRect2} alt='card Rectangle'/>
                </div>
            </div>

            <div className='learn'>
            <div>
                <img className='to-dim' src={cardRect1} alt='card Rectangle'/>
                </div>
            <div className='left'>
                <img src={comCard} alt='Card'/>
            </div>
            <div className='right'>
            <div className='paragraph-Div'>
                <h2>Community</h2>
                <p></p>
                <h3>Your Gateway to an AI-Powered Career.</h3>
                <p>
                Join a professional community that bridges the gap between learning and industry. Collaborate with peers, gain direct exposure to real-world projects, and stay ahead with AI-driven insights and workshops. Build your network, sharpen your skills. And get ready for the career of tomorrow, today.</p>
                <a href="#"><h3>Learn More</h3></a>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Card;