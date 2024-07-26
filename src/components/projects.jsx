import React, { useEffect, useState } from "react";
import Nav from "./nav";
import Footer from "./footer";
import daybreak from "../images/Daybreak.png";
import barangay from "../images/DBarangay.png";
import synx from "../images/Synx.png";

const Projects = () => {
  const allImages = [daybreak, barangay, synx];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  // Titles and descriptions corresponding to images
  const titles = [
    "Daybreak",
    "D’Barangay: A Mobile and Web Platforms to Enable Remote Services, Collaboration and Disaster Response",
    "Synx: Scheduling System",
  ];
  const descriptions = [
    "Daybreak is the first website I created and hosted, designed to provide comprehensive information about popular games like Minecraft, Valorant, and more. The platform offers detailed insights, updates, and resources for gamers, delivering a user-friendly experience for enthusiasts to explore and stay informed about their favorite titles",
    "Your capstone project, A Mobile and Web Platform for Remote Services, Collaboration, and Disaster Response, utilizes the MERN stack for the web application and Flutter for the mobile app. This integrated solution is designed to enhance remote interactions, streamline collaboration, and improve disaster response efforts. By leveraging these technologies, the platform aims to deliver efficient communication tools and effective coordination capabilities for critical situations.",
    "Synx is a scheduling system developed during our internship to enhance time management and streamline scheduling processes. Built with Next.js for a dynamic and performant web experience, PostgreSQL for robust and scalable database management, and React for a responsive user interface, Synx optimizes scheduling efficiency and supports seamless user interactions.",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % allImages.length);
  };

  const currentImage = allImages[currentIndex];

  const handleScroll = () => {
    const fadeThreshold = window.innerHeight / 1.1;
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

  return (
    <div className="bg-black">
      <div
        className={`projectscontainer text-white min-h-screen font-montserrat ${
          fadeIn ? "fade-in" : "fade-out"
        }`}
      >
        <Nav />
        <div className="container mx-auto flex-1 p-4 md:p-10 mt-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-12 text-left">
            PROJECTS
          </h1>

          <div
            className="relative rounded-lg overflow-hidden flex items-center justify-center transition-background min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] group"
            style={{
              backgroundImage: `url(${currentImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 hover:opacity-100 transition-opacity">
              <h2 className="text-xl md:text-2xl font-semibold mb-2 text-white">
                {titles[currentIndex]}
              </h2>
              <p className="text-sm md:text-base text-white text-justify p-32">
                {descriptions[currentIndex]}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center mt-4">
            <button
              onClick={nextSlide}
              className="bg-gray-500 hover:bg-red-800 text-white font-bold py-2 px-4 mb-2 md:mb-0 md:mr-2 w-full md:w-48 opacity-75 rounded-lg"
            >
              Next
            </button>
            <hr className="mx-2 h-1 w-full md:w-80 border-gray-300 my-2 md:my-0" />
            <div className="flex items-center">
              <h1 className="font-bold text-5xl w-12 text-center">
                {(currentIndex + 1).toString().padStart(2, "0")}
              </h1>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
