import React, { useState, useEffect } from "react";
import Nav from "./nav";
import Footer from "./footer";
import {
  FaMapMarkerAlt,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  const [fadeIn, setFadeIn] = useState(true);

  const handleScroll = () => {
    const fadeThreshold = window.innerHeight / 3; // Adjust this value

    const scrollPosition = window.scrollY;

    if (scrollPosition < fadeThreshold) {
      setFadeIn(true);
    } else {
      setFadeIn(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="bg-black min-h-screen">
      <Nav />
      <div
        className={`text-white flex flex-col font-montserrat ${
          fadeIn ? "fade-in" : ""
        }`}
      >
        <div className="text-white">
          <div className="container mx-auto flex-1 p-8">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8">
              CONTACTS
            </h1>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-4 md:mb-8">
              <div className="bgcolor rounded-lg p-4 flex items-center hover:bg-red-900">
                <div className="bg-gray-300 rounded-full p-3 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-red-500 text-lg md:text-2xl" />
                </div>
                <div className="ml-4">
                  <h2 className="text-sm md:text-lg font-bold ">Address</h2>
                  <p className="text-xs md:text-sm">
                    San Juan City, Manila, Philippines
                  </p>
                </div>
              </div>
              <div className="bgcolor rounded-lg p-4 flex items-center hover:bg-red-900">
                <div className="bg-gray-300 rounded-full p-3 flex items-center justify-center">
                  <FaFacebook className="text-red-500 text-lg md:text-2xl" />
                </div>
                <div className="ml-4">
                  <h2 className="text-sm md:text-lg font-bold ">
                    Social Media
                  </h2>
                  <p className="text-xs md:text-sm">
                    <ul className="list-none flex items-center space-x-2 md:space-x-4">
                      <li>
                        <a
                          href="https://www.facebook.com/jericho.gipoleo"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-blue-800"
                        >
                          <FaFacebook className="text-sm md:text-lg lg:text-2xl cursor-pointer" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/ekoverse?igsh=NW1qdmdyd2ozMzds"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-pink-500"
                        >
                          <FaInstagram className="text-sm md:text-lg lg:text-2xl cursor-pointer" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/jerichogipoleo"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-gray-900"
                        >
                          <FaGithub className="text-sm md:text-lg lg:text-2xl cursor-pointer" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:gipoleojericho@gmail.com"
                          className="text-white hover:text-red-800"
                        >
                          <FaEnvelope className="text-sm md:text-lg lg:text-2xl cursor-pointer" />
                        </a>
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="bgcolor rounded-lg p-4 flex items-center hover:bg-red-900">
                <div className="bg-gray-300 rounded-full p-3 flex items-center justify-center">
                  <FaEnvelope className="text-red-500 text-lg md:text-2xl" />
                </div>
                <div className="ml-4">
                  <h2 className="text-sm md:text-lg font-bold">Email</h2>
                  <p className="text-xs md:text-sm">
                    <a href="mailto:gipoleojericho@gmail.com">
                      gipoleojericho@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="bgcolor rounded-lg p-4 flex items-center hover:bg-red-900">
                <div className="bg-gray-300 rounded-full p-3 flex items-center justify-center">
                  <FaPhone className="text-red-500 text-lg md:text-2xl" />
                </div>
                <div className="ml-4">
                  <h2 className="text-sm md:text-lg font-bold">Phone</h2>
                  <p className="text-xs md:text-sm">+63 976 175 7634</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bgcolor p-4 rounded-lg shadow-md">
              <form
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                onSubmit={handleSubmit}
              >
                <div className="mb-4">
                  <input
                    className="w-full p-2 rounded-md text-xs md:text-sm text-black bg-gray-300 bg-opacity-25"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="w-full p-2  rounded-md text-xs md:text-sm  text-black bg-gray-300 bg-opacity-25"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="mb-4 col-span-1 md:col-span-2">
                  <input
                    className="w-full p-2  rounded-md text-xs md:text-sm  text-black  bg-gray-300 bg-opacity-25"
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="mb-4 col-span-1 md:col-span-2">
                  <textarea
                    className="w-full p-2  rounded-md text-xs md:text-sm text-black  bg-gray-300 bg-opacity-25"
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="text-center col-span-1 md:col-span-2">
                  <button
                    className="bg-gray-200 text-black px-6 py-3 rounded-md font-bold hover:bg-red-800 w-36 h-12 text-xs md:text-sm"
                    type="submit"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-8 text-center w-80 h-32">
              <p className="mb-4 text-black">Not available</p>
              <button
                className="bg-gray-200 text-black px-6 py-2 rounded-md font-bold hover:bg-red-800"
                onClick={closePopup}
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
