import React, { useState } from "react";
import Nav from "./nav";
import Footer from "./footer";
import sample from "../images/samplewallpaper.png";
import sample1 from "../images/samplewallpaper1.png";
import sample2 from "../images/samplewallpaper2.png";
import sample3 from "../images/samplewallpaper3.png"; // Added new image

const Projects = () => {
  const allImages = [sample, sample1, sample2, sample3]; // Include all images
  const [currentIndex, setCurrentIndex] = useState(0);

  // Titles and descriptions corresponding to images
  const titles = [
    "Sample Project",
    "Sample Project 1",
    "Sample Project 2",
    "Sample Project 3",
  ];
  const descriptions = [
    "No Project Images yet please refer to my Github",
    "No Project Images yet please refer to my Github",
    "No Project Images yet please refer to my Github",
    "No Project Images yet please refer to my Github",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % allImages.length);
  };

  const visibleImages = [
    allImages[currentIndex],
    allImages[(currentIndex + 1) % allImages.length],
    allImages[(currentIndex + 2) % allImages.length],
  ];

  const currentImage = visibleImages[0]; // Always take the first image as current

  return (
    <div className="projectscontainer text-white min-h-screen font-montserrat">
      <Nav />
      <div className="container mx-auto flex-1 p-4 md:p-10 mt-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-12 text-left">
          PROJECTS
        </h1>

        <div
          className="bg-black carouselcontainer rounded-lg p-6 mb-6 md:mb-12 flex flex-col md:flex-row transition-background min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh]"
          style={{
            backgroundImage: `url(${currentImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="md:w-1/2 lg:w-1/3 flex flex-col justify-center items-center text-center p-4">
            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-white">
              {titles[currentIndex]}
            </h2>
            <p className="text-sm md:text-base text-white">
              {descriptions[currentIndex]}
            </p>
          </div>
          <div className="carouselpics md:w-1/2 lg:w-2/3 mt-4 md:mt-0 flex flex-col justify-center items-center">
            <div className="w-full flex flex-wrap justify-around items-center">
              {visibleImages.map((image, index) => (
                <div
                  key={index}
                  className="w-full md:w-60 h-64 md:h-96 rounded-lg overflow-hidden m-2"
                  style={{
                    zIndex: index === 1 ? 1 : 0, // Ensure the cover image is in front
                  }}
                >
                  <img
                    src={image}
                    alt={`Project Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
