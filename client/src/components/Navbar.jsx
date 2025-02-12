import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/codeateLogo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Left Section */}
        <div className="flex items-center w-full md:w-auto">
          <Link to="/">
            <img src={logo} alt="logo" className="h-10" />
          </Link>
          {/* Hamburger Menu for Mobile */}
          <button
            className="ml-auto text-2xl md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:flex md:items-center transition-all duration-300 ease-in-out 
          ${
            menuOpen ? "block shadow-md bg-white" : "hidden"
          } md:block z-50 pb-8 lg:pb-0 md:pb-0`}
        >
          {/* Added bg-white to ensure the background is white when menuOpen is true */}
          <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-gray-700 text-lg">
            <li>
              <Link
                to="/upcoming"
                className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 
after:bg-blue-500 after:transform after:scale-x-0 after:transition-transform after:duration-300 
after:ease-in-out hover:after:scale-x-100
"
                onClick={() => setMenuOpen(false)}
              >
                Build
              </Link>
            </li>
            <li>
              <Link
                to="/upcoming"
                className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 
after:bg-blue-500 after:transform after:scale-x-0 after:transition-transform after:duration-300 
after:ease-in-out hover:after:scale-x-100
"
                onClick={() => setMenuOpen(false)}
              >
                Learn
              </Link>
            </li>
            <li>
              <Link
                to="/upcoming"
                className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 
after:bg-blue-500 after:transform after:scale-x-0 after:transition-transform after:duration-300 
after:ease-in-out hover:after:scale-x-100
"
                onClick={() => setMenuOpen(false)}
              >
                Community
              </Link>
            </li>
            <li>
              <Link
                to="/careers"
                className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 
after:bg-blue-500 after:transform after:scale-x-0 after:transition-transform after:duration-300 
after:ease-in-out hover:after:scale-x-100
"
                onClick={() => setMenuOpen(false)}
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                to="/upcoming"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
