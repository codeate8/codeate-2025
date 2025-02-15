import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/codeateLogo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClickOutside = (event) => {
    if (!event.target.closest("nav") && !event.target.closest("button")) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white shadow-md w-full relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Left Section */}
        <div className="flex items-center w-full md:w-auto">
          <Link to="/" onClick={() => setMenuOpen(false)}>
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
          className={`absolute md:static top-full left-0 w-full md:w-auto bg-white md:flex md:items-center transition-all duration-300 ease-in-out 
          ${menuOpen ? "block shadow-md bg-white" : "hidden"} md:block z-50 pb-8 md:pb-0`}
        >
          <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-gray-700 text-lg">
            <li>
              <Link
                to="/about"
                className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 
after:bg-blue-500 after:transform after:scale-x-0 after:transition-transform after:duration-300 
after:ease-in-out hover:after:scale-x-100 font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/careers"
                className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 
after:bg-blue-500 after:transform after:scale-x-0 after:transition-transform after:duration-300 
after:ease-in-out hover:after:scale-x-100 font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                Job Board
              </Link>
            </li>
            <li>
              <Link
                to="/community"
                className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 
after:bg-blue-500 after:transform after:scale-x-0 after:transition-transform after:duration-300 
after:ease-in-out hover:after:scale-x-100 font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                Community
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
