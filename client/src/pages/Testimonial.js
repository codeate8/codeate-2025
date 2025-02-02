import React from "react";
import "./Testimonial.css";
import karthik from "../assets/kartick.png";
import vikas from "../assets/Vikas.png";
import aman from "../assets/aman.png";
import quote from "../assets/Quote.png";
import whatsappVector from "../assets/whatsappVector.png";
import instaVector from "../assets/instaVector.png";
import linVector from "../assets/linVector.png";
import discVector from "../assets/discVector.png";
import codeateLogo from "../assets/codeateLogo2.png";
import Insights from "./Insights";
import Upcoming from "./Upcoming";
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
        <div className="upper-section">
          <div className="upper-section-left">
            <h2>
              Number
              <br />
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
          <div className="middle-section-p1">
            <h3 className="project-header">
              <span className="highlight">Our </span>Testimonials
            </h3>
            <p>About our success stories.</p>
          </div>
          {/* <div className="middle-section-p2">
            <div>
              <img src={testi1} alt="testi 1 img" />
            </div>
            <div className="middle-section-alpha">
              <img src={quote} alt="Quote" />
              <p>
                Amazing experience with Codeate! The instructors are skilled and
                supportive, and the learning process is seamless. Highly
                recommend it to anyone passionate about growing their talents!
              </p>
              <h3> - Christy Santonia</h3>
            </div>
          </div> */}
          <AnimatedTestimonials
            testimonials={testimonialsData}
            autoplay={true}
          />
        </div>
      </div>
      <Insights />
      <footer class="footer">
        <div class="footer-container">
          <div class="footer-brand">
            <img src={codeateLogo} alt="Codeate Logo" class="footer-logo" />
            <p>
              Enabling community-led peer-to-peer learning like never before!
            </p>
            <div>
              <a
                href="https://forms.gle/9DkBeF84MoVwhVDSA"
                target="_blank"
                class="join-button"
              >
                Join Community
              </a>
            </div>
          </div>
          <div class="footer-links">
            <div class="footer-column">
              <h4>Solutions</h4>
              <ul>
                <li>
                  <a href="/Upcoming">Build</a>
                </li>
                <li>
                  <a href="/Upcoming">Learn</a>
                </li>
                <li>
                  <a href="/Upcoming">Community</a>
                </li>
              </ul>
            </div>
            <div class="footer-column">
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="/Upcoming">Consultancy</a>
                </li>
                <li>
                  <a href="/Upcoming">College Connects</a>
                </li>
                <li>
                  <a href="/Upcoming">Upskilling</a>
                </li>
              </ul>
            </div>
            <div class="footer-column">
              <h4>Helpful Links</h4>
              <ul>
                <li>
                  <a href="/Upcoming">About Us</a>
                </li>
                <li>
                  <a href="/Upcoming">Privacy Policy</a>
                </li>
                <li>
                  <a href="/Upcoming">Terms & Conditions</a>
                </li>
                <li>
                  <a href="/Upcoming">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>© 2024 Codeate. All rights reserved</p>
          <div class="social-icons">
            <a
              href="https://chat.whatsapp.com/CPx0PYzQBUHEPGwqOqOXSP"
              target="_blank"
            >
              <img src={whatsappVector} alt="WhatsApp" />
            </a>
            <a
              href="https://www.instagram.com/codeate.in?igsh=MXdseTJqYmJ0dnF1Ng=="
              target="_blank"
            >
              <img src={instaVector} alt="Instagram" />
            </a>
            <a
              href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A74886369&keywords=codeate&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=974f88ff-3e35-48f8-bca8-ad4a56cb7ab2&sid=5%3Am&spellCorrectionEnabled=true"
              target="_blank"
            >
              <img src={linVector} alt="LinkedIn" />
            </a>
            <a href="https://discord.gg/nFqkCBGNtf" target="_blank">
              <img src={discVector} alt="Discord" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Testimonial;