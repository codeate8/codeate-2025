import React from "react";
import whatsappVector from "../assets/whatsappVector.png";
import instaVector from "../assets/instaVector.png";
import linVector from "../assets/linVector.png";
import discVector from "../assets/discVector.png";
import codeateLogo from "../assets/codeateLogo2.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      {/* First Section */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-x-36">
        {/* Left Side */}
        <div className="md:w-1/3 mb-6 md:mb-0 flex flex-col items-center md:items-start">
          <img src={codeateLogo} alt="Codeate Logo" className="w-36 mb-2" />
          <p className="text-sm">Enabling community-led peer-to-peer learning like never before!</p>
          <a
            href="https://chat.whatsapp.com/CPx0PYzQBUHEPGwqOqOXSP"
            target="_blank"
            className="mt-2 px-4 py-2 bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg"
            rel="noreferrer"
          >
            Join Community
          </a>
        </div>
        {/* Right Side */}
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold text-lg text-white mb-2">Solutions</h4>
            <ul className="space-y-1">
              <li><Link to="/Upcoming" className="hover:text-blue-400">Build</Link></li>
              <li><Link to="/Upcoming" className="hover:text-blue-400">Learn</Link></li>
              <li><Link to="/Upcoming" className="hover:text-blue-400">Community</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-white mb-2">Services</h4>
            <ul className="space-y-1">
              <li><Link to="/Upcoming" className="hover:text-blue-400">Consultancy</Link></li>
              <li><Link to="/Upcoming" className="hover:text-blue-400">College Connects</Link></li>
              <li><Link to="/Upcoming" className="hover:text-blue-400">Upskilling</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-white mb-2">Helpful Links</h4>
            <ul className="space-y-1">
              <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
              <li><Link to="/upcoming" className="hover:text-blue-400">Privacy Policy</Link></li>
              <li><Link to="/upcoming" className="hover:text-blue-400">Terms & Conditions</Link></li>
              <li><Link to="/upcoming" className="hover:text-blue-400">FAQ</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Second Section */}
      <div className="mt-6 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-xs px-12">
        <p>© 2024 Codeate. All rights reserved</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="https://chat.whatsapp.com/CPx0PYzQBUHEPGwqOqOXSP" target="_blank" rel="noreferrer">
            <img src={whatsappVector} alt="WhatsApp" className="w-6" />
          </a>
          <a href="https://www.instagram.com/codeate.in?igsh=MXdseTJqYmJ0dnF1Ng==" target="_blank" rel="noreferrer">
            <img src={instaVector} alt="Instagram" className="w-6" />
          </a>
          <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A74886369&keywords=codeate&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=974f88ff-3e35-48f8-bca8-ad4a56cb7ab2&sid=5%3Am&spellCorrectionEnabled=true" target="_blank" rel="noreferrer">
            <img src={linVector} alt="LinkedIn" className="w-6" />
          </a>
          <a href="https://discord.gg/nFqkCBGNtf" target="_blank" rel="noreferrer">
            <img src={discVector} alt="Discord" className="w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
