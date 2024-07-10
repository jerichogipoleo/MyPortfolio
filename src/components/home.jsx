import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";
import me from "../images/backgroundmee.png";
import cert1 from "../images/responsive-web-design.png";
import Nav from "./nav";
import Footer from "./footer";

const Home = () => {
  const [fadeIn, setFadeIn] = useState(true);
  const [secondFadeIn, setSecondFadeIn] = useState(false);

  const handleScroll = () => {
    const firstFadeThreshold = window.innerHeight / 1.1; // Adjust this value
    const secondFadeThreshold = window.innerHeight * 0.5; // Adjust this value

    const scrollPosition = window.scrollY;

    if (scrollPosition < firstFadeThreshold) {
      setFadeIn(true);
    } else {
      setFadeIn(false);
    }

    if (scrollPosition > secondFadeThreshold) {
      setSecondFadeIn(true);
    } else {
      setSecondFadeIn(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-black">
      <Nav />
      <div
        className={`flex flex-row items-center justify-start min-h-screen py-8 px-4 sm:px-6 lg:px-8 text-white ${
          fadeIn ? "fade-in" : "fade-out"
        }`}
      >
        <div className="flex flex-col justify-center h-screen w-full lg:w-1/2 lg:pl-">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-white lg:ml-20">
            JERICHO GIPOLEO
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl lg:ml-20 font-bold text-gray-400">
            An aspiring <span className="text-red-600">PROGRAMMER |</span>
            <br /> based in MANILA, PHILIPPINES
          </h2>

          <hr className="my-8 w-80 border-t-2 border-red-600  lg:ml-20" />

          <ul className="list-none flex items-center space-x-6 md:space-x-12 lg:ml-20">
            <li>
              <a
                href="https://www.facebook.com/jericho.gipoleo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-800"
              >
                <FaFacebook className="text-xl md:text-1xl lg:text-2xl cursor-pointer" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/ekoverse?igsh=NW1qdmdyd2ozMzds"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-800"
              >
                <FaInstagram className="text-xl md:text-1xl lg:text-2xl cursor-pointer" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jerichogipoleo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-800"
              >
                <FaGithub className="text-xl md:text-1xl lg:text-2xl cursor-pointer" />
              </a>
            </li>
            <li>
              <a
                href="mailto:gipoleojericho@gmail.com"
                className="text-white hover:text-red-800"
              >
                <FaEnvelope className="text-xl md:text-1xl lg:text-2xl cursor-pointer" />
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex justify-center items-center w-1/2">
          <img src={me} alt="Jericho GIPOLEO" className="max-w-full h-auto" />
        </div>
      </div>
      <div
        className={`min-h-screen py-8 px-4 sm:px-6 lg:px-8 text-white ${
          secondFadeIn ? "fade-in" : "fade-out"
        }`}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 text-white ml-5 md:ml-10">
          CERTIFICATES
        </h1>

        <div className="flex items-center justify-center">
          <div className="max-w-screen-lg w-full mx-auto p-4">
            <img
              src={cert1}
              alt="Certificate"
              className="object-cover rounded-lg shadow-lg max-h-80vh"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
