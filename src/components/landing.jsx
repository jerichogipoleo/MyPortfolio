import React, { useEffect, useState } from "react";
import me from "../images/backgroundmee.png";

const Landing = () => {
  // role
  const [text, setText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const words = ["PROGRAMMER", "FULL STACK DEVELOPER", "UI/UX DESIGNER"];
    let currentIndex = 0;
    let timeoutId;

    const typeText = () => {
      setText(words[currentWordIndex].slice(0, currentIndex));
      currentIndex++;

      if (currentIndex <= words[currentWordIndex].length) {
        timeoutId = setTimeout(typeText, 200); // Typing speed
      } else {
        timeoutId = setTimeout(() => {
          setCurrentWordIndex((currentWordIndex + 1) % words.length);
          currentIndex = 0;
        }, 1000); // Pause between words
      }
    };

    timeoutId = setTimeout(typeText, 200); // Start typing immediately

    return () => clearTimeout(timeoutId);
  }, [currentWordIndex]);
  return (
    <>
      <div className="flex flex-row items-center justify-start min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="flex flex-col justify-center w-full lg:w-1/2 lg:pl-">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-white lg:ml-20">
            JERICHO GIPOLEO
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl lg:ml-20 font-bold text-gray-400">
            An aspiring <span className="text-red-600">{text} |</span>
            <br /> based in MANILA, PHILIPPINES
          </h2>

          <hr className="my-8 w-80 border-t-2 border-red-600  lg:ml-20" />

          <ul className="list-none flex items-center space-x-6 md:space-x-12 lg:ml-20">
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
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-red-600">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex justify-center items-center w-1/2">
          <img src={me} alt="Jericho GIPOLEO" className="max-w-full h-auto" />
        </div>
      </div>
    </>
  );
};

export default Landing;
