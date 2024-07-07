import React, { useState } from "react";
import logo from "../images/logo.png";
import { FaSun, FaMoon } from "react-icons/fa";

const Nav = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isSunActive, setIsSunActive] = useState(true); // State to track active icon
  const toggleSun = () => {
    setIsSunActive(true); // Activate Sun icon
  };

  const toggleMoon = () => {
    setIsSunActive(false); // Activate Moon icon
  };

  return (
    <div className="navcontainer w-full font-montserrat bg-gray-800">
      <div className="navcontent max-w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="hover:text-red-600">
            <img
              src={logo}
              alt="Profile"
              className="w-8 h-8 mr-2 text-white self-start"
            />
          </a>
        </div>
        <ul
          className={`list-none flex-col md:flex-row md:flex items-center space-y-4 md:space-y-0 md:space-x-6 lg:space-x-12 text-white md:self-center ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <li>
            <a href="/home" className="hover:text-red-600">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-red-600">
              About
            </a>
          </li>
          <li>
            <a href="/projects" className="hover:text-red-600">
              Project
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-red-600">
              Contact
            </a>
          </li>
          {/* <li className="hover:text-red-800">
            {isSunActive ? (
              <FaSun onClick={toggleMoon} className="cursor-pointer" />
            ) : (
              <FaMoon onClick={toggleSun} className="cursor-pointer" />
            )}
          </li> */}
        </ul>
        <div
          className={`flex md:hidden self-end w-full justify-center ${
            isOpen ? "mt-4" : "mb-4"
          }`}
        >
          <button
            onClick={toggleMenu}
            type="button"
            className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
