import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll animation
    });
  };

  return (
    <footer className="py-6 text-white bg-trasnparent">
      <div className="container mx-auto px-4">
        <hr className="border-t-2 border-red-600 mb-4 w-full" />
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-white text-sm hover:text-red-800 mb-4 md:mb-0 md:mr-4">
            <a href="/">Jericho Gipoleo</a>
          </div>
          <div className="flex items-center">
            <ul className="list-none flex items-center space-x-4 mb-4 md:mb-0">
              <li>
                <a
                  href="https://www.facebook.com/jericho.gipoleo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-red-800 text-sm md:text-lg"
                >
                  <FaFacebook className="text-sm md:text-lg cursor-pointer" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ekoverse?igsh=NW1qdmdyd2ozMzds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-red-800 text-sm md:text-lg"
                >
                  <FaInstagram className="text-sm md:text-lg cursor-pointer" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/jerichogipoleo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-red-800 text-sm md:text-lg"
                >
                  <FaGithub className="text-sm md:text-lg cursor-pointer" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:gipoleojericho@gmail.com"
                  className="text-white hover:text-red-800 text-sm md:text-lg"
                >
                  <FaEnvelope className="text-sm md:text-lg cursor-pointer" />
                </a>
              </li>
            </ul>
            <div className="text-white text-lg hover:text-red-800 cursor-pointer ml-4">
              <FaArrowUp
                onClick={scrollToTop}
                className="text-lg md:text-xl cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
