import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaGithub, FaGoogle } from "react-icons/fa";
import me from "../images/backgroundmee.png";

import Nav from "./nav";
import Footer from "./footer";

const Home = () => {
  return (
    <div className="bg-black">
      <Nav />
      <div className="flex flex-row items-center justify-start min-h-screen py-8 px-4 sm:px-6 lg:px-8 text-white">
        <div className="flex flex-col justify-center  h-screen w-full lg:w-1/2 lg:pl-">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-white">
            JERICHO GIPOLEO
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl">
            An aspiring <span className="text-red-600">PROGRAMMER |</span>
            <br /> based in MANILA, PHILIPPINES
          </h2>
          <hr className="my-8 w-80 border-t-2 border-red-600" />

          <ul className="list-none flex items-center space-x-6 md:space-x-12">
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
                <FaGoogle className="text-2xl md:text-3xl lg:text-4xl cursor-pointer" />
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex justify-center items-center w-1/2">
          <img src={me} alt="Jericho GIPOLEO" className="max-w-full h-auto" />
        </div>
      </div>
      <div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-white ml-10">
          RECENT PROJECTS
        </h1>
        <div className="flex items-center justify-center text-center">
          <img
            src="https://via.placeholder.com/800x600"
            alt="Placeholder"
            className=" object-cover rounded-lg"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
