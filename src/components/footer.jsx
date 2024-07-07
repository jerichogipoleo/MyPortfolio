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
    <>
      <footer className="py-6 text-white">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <hr className="border-t-2 border-red-600 mb-4 w-full self-start" />
          <div className="flex items-center justify-between w-full mb-4">
            <ul className="list-none flex items-center space-x-4">
              <li>
                <a
                  href="https://www.facebook.com/jericho.gipoleo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-800"
                >
                  <FaFacebook className="text-2xl md:text-3xl lg:text-4xl cursor-pointer" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ekoverse?igsh=NW1qdmdyd2ozMzds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-pink-500"
                >
                  <FaInstagram className="text-2xl md:text-3xl lg:text-4xl cursor-pointer" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/jerichogipoleo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-900"
                >
                  <FaGithub className="text-2xl md:text-3xl lg:text-4xl cursor-pointer" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:gipoleojericho@gmail.com"
                  className="text-white hover:text-red-800"
                >
                  <FaEnvelope className="text-2xl md:text-3xl lg:text-4xl cursor-pointer" />
                </a>
              </li>
            </ul>
            <div className="flex items-center flex-col md:flex-row">
              <div className="text-white text-lg hover:text-red-800 md:text-xl lg:text-2xl mb-2 md:mb-0 md:mr-2">
                Jericho Gipoleo
              </div>
              <div className="text-white text-lg hover:text-red-800 md:text-xl lg:text-2xl cursor-pointer">
                <FaArrowUp onClick={scrollToTop} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
