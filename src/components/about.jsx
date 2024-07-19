import React, { useRef, useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import jericho from "../images/jericho.png";
import reactImage from "../images/reactjs.png";
import mongodbImage from "../images/mongodb.png";
import bootstrapImage from "../images/bootstrap.png";
import flutterImage from "../images/flutter.png";
import mysqlImage from "../images/mysql.png";
import phpimage from "../images/php.png";
import node from "../images/nodejs.png";
import tailwind from "../images/tailwind.png";
import java from "../images/java.png";
import git from "../images/git.png";

import Nav from "./nav";
import Footer from "./footer";

const useFadeInOnScroll = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isVisible];
};

const About = () => {
  const [aboutRef, aboutVisible] = useFadeInOnScroll(0.1);
  const [interestsRef, interestsVisible] = useFadeInOnScroll(0.1);
  const [skillsRef, skillsVisible] = useFadeInOnScroll(0.1);
  const [educationRef, educationVisible] = useFadeInOnScroll(0.1);
  const [experienceRef, experienceVisible] = useFadeInOnScroll(0.1);

  const skills = [
    { name: "Reactjs", image: reactImage },
    { name: "MongoDB", image: mongodbImage },
    { name: "Bootstrap", image: bootstrapImage },
    { name: "Flutter", image: flutterImage },
    { name: "MySQL", image: mysqlImage },
    { name: "PHP", image: phpimage },
    { name: "Nodejs", image: node },
    { name: "Tailwind", image: tailwind },
    { name: "JAVA", image: java },
    { name: "GIT", image: git },
  ];

  // intro
  const [leftText, setLeftText] = useState("");
  const [rightText, setRightText] = useState("");
  const [leftWordIndex, setLeftWordIndex] = useState(0);
  const [rightWordIndex, setRightWordIndex] = useState(0);

  const leftWords = ["IT-MWA Student", "Languages", "Languages", "Languages"];
  const rightWords = ["Programmer", "React JS", "PHP", "Node JS"];

  useEffect(() => {
    let leftCurrentIndex = 0;
    let rightCurrentIndex = 0;
    let leftTimeoutId;
    let rightTimeoutId;

    const typeText = () => {
      // Type left text
      if (leftCurrentIndex <= leftWords[leftWordIndex].length) {
        setLeftText(leftWords[leftWordIndex].slice(0, leftCurrentIndex));
        leftCurrentIndex++;
      }

      // Type right text
      if (rightCurrentIndex <= rightWords[rightWordIndex].length) {
        setRightText(rightWords[rightWordIndex].slice(0, rightCurrentIndex));
        rightCurrentIndex++;
      }

      // Schedule next typing
      if (
        leftCurrentIndex <= leftWords[leftWordIndex].length ||
        rightCurrentIndex <= rightWords[rightWordIndex].length
      ) {
        leftTimeoutId = setTimeout(typeText, 200); // Typing speed
      } else {
        // Pause before switching words
        setTimeout(() => {
          setLeftWordIndex((leftWordIndex + 1) % leftWords.length);
          setRightWordIndex((rightWordIndex + 1) % rightWords.length);
          leftCurrentIndex = 0;
          rightCurrentIndex = 0;
        }, 1000); // Pause between loops
      }
    };

    typeText();

    return () => {
      clearTimeout(leftTimeoutId);
      clearTimeout(rightTimeoutId);
    };
  }, [leftWordIndex, rightWordIndex]);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col font-montserrat">
      <Nav />
      <div
        ref={aboutRef}
        className={`aboutcontainer1 text-white min-h-screen flex flex-col transition-opacity duration-1000 ${
          aboutVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container mx-auto flex-1 p-20 mt-20">
          <h1 className="text-4xl font-bold mb-12 md:mb-20">ABOUT ME</h1>
          <div className="flex flex-col md:flex-row items-center md:items-start p-4">
            <div className="mb-4 md:mb-0 md:w-1/3 flex justify-center">
              <img
                src={jericho}
                alt="Jericho Gipoleo"
                className="w-64 h-auto md:w-96 md:h-auto object-cover"
              />
            </div>
            <div className="md:w-2/3 md:pl-4">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-red-600">
                {/* {leftText}| */}
                BSIT-MWA Student | PROGRAMMER
              </div>

              <p className="text-lg mb-4  text-justify">
                Hello! My name is Jericho Gipoleo, and I'm a web developer with
                a passion for creating beautiful and functional web
                applications. I have experience in various technologies
                including PHP, React, Node.js, MongoDB, and MySQL. I enjoy
                solving complex problems and continuously learning new skills.
              </p>
              <p className="text-lg mb-4 text-justify">
                I attended National University and completed an internship at
                Cornersteel Systems Corporation, where I worked with
                technologies like Tailwind CSS, PHP, React, Next.js, and more.
                This experience helped me grow both as a developer and as a
                person.
              </p>
              <p className="text-lg mb-4 text-justify">
                In my free time, I enjoy exploring new technologies, working on
                personal projects, and contributing to open-source communities.
                I am always looking for new challenges and opportunities to
                improve my skills and collaborate with others.
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex-1 p-4 sm:p-20 mt-20">
          <div className="flex flex-col md:flex-row items-center mb-4 md:mb-20">
            <h1 className="text-4xl font-bold mb-2 md:mb-0">MY INTERESTS</h1>
            <hr className="w-full md:w-80 md:ml-4 border-t-2 border-red-600" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-2">Anime</h2>
              <p className="text-lg sm:text-base">
                Watching anime is one of my favorite pastimes.
              </p>
            </div>

            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-2">Biking</h2>
              <p className="text-lg sm:text-base">
                I enjoy biking and exploring new routes.
              </p>
            </div>

            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-2">Listening to Music</h2>
              <p className="text-lg sm:text-base">
                Music is a big part of my daily life.
              </p>
            </div>

            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-2">Sports</h2>
              <p className="text-lg sm:text-base">
                Baseball is my most liked sport.
              </p>
            </div>

            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-2">Reading</h2>
              <p className="text-lg sm:text-base">
                I love diving into books like novels and reading comics and
                manhwa.
              </p>
            </div>

            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-2">Technology</h2>
              <p className="text-lg sm:text-base">
                Technology fascinates me, inspiring me to pursue BSIT.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={interestsRef}
        className={`aboutcontainer2 text-white min-h-screen flex flex-col transition-opacity duration-1000 ${
          interestsVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container mx-auto flex-1 p-8 md:p-20 mt-8 md:mt-20">
          <h1 className="text-4xl font-bold mb-12 md:mb-20 text-right">
            SKILLS
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-4 bg-gray-300 rounded-lg text-center text-black hover:bg-red-800"
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="h-20 mx-auto mb-4"
                />
                <p className="text-xl font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        ref={skillsRef}
        className={`aboutcontainer3 text-white min-h-screen flex flex-col transition-opacity duration-1000 ${
          skillsVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container mx-auto flex-1 p-20 mt-20">
          <h1 className="text-3xl md:text-4xl font-bold mb- md:mb-10 lg:mb-12">
            EDUCATIONAL BACKGROUND
          </h1>

          <div className="timeline mx-auto md:max-w-3xl">
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-red-900 rounded-full mt-1.5 -start-1.5 border border-red-900 dark:border-red-900 dark:bg-red-700" />
                <time className="mb-1 text-lg text-white font-bold leading-tight">
                  NATIONAL UNIVERSITY
                </time>
                <h3 className="text-lg font-semibold text-white leading-tight">
                  BSIT - Mobile and Web Application
                </h3>
                <h3 className="text-lg font-semibold text-white leading-tight">
                  2020 - 2024
                </h3>
                <ul className="list-disc ml-6 text-white leading-tight">
                  <li>Consitent Dean’s List Awardee</li>
                </ul>
              </li>
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-red-900 rounded-full mt-1.5 -start-1.5 border border-red-900 dark:border-red-900 dark:bg-red-700" />
                <time className="mb-1 text-lg text-white font-bold leading-tight">
                  ARELLANO UNIVERSITY
                </time>
                <h3 className="text-lg font-semibold text-white leading-tight">
                  Senior High School - ICT (Information and Communication
                  Technologies)
                </h3>
                <h3 className="text-lg font-semibold text-white leading-tight">
                  2018 - 2020
                </h3>
                <ul className="list-disc ml-6 text-white leading-tight">
                  <li>Academic Excellence Award</li>
                </ul>
              </li>
              <li className="ms-4">
                <div className="absolute w-3 h-3 bg-red-900 rounded-full mt-1.5 -start-1.5 border border-red-900 dark:border-red-900 dark:bg-red-700" />
                <time className="mb-1 text-lg text-white font-bold leading-tight">
                  SAN JUAN NATIONAL HIGHSCHOOL
                </time>
                <h3 className="text-lg font-semibold text-white leading-tight">
                  Junior High School
                </h3>
                <h3 className="text-lg font-semibold text-white leading-tight">
                  2014 - 2018
                </h3>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div
        ref={educationRef}
        className={`aboutcontainer4 text-white min-h-screen flex flex-col transition-opacity duration-1000 ${
          educationVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container mx-auto flex-1 p-8 md:p-20 mt-8 md:mt-20">
          <h1 className="text-4xl font-bold mb-12 md:mb-20 text-right">
            EXPERIENCE
          </h1>
          <div class="min-h-screen">
            <div class="min-h-screen flex justify-center">
              <div class="w-full md:w-2/3 mx-auto">
                <div class="flex flex-row w-full">
                  <div class="w-full md:w-2/5 px-2 py-4 md:py-10">
                    <div class="flex flex-col w-full rounded-lg shadow bg-gray-800 px-4 py-5">
                      <div class="text-white mb-2 flex justify-between">
                        <div class="font-bold">
                          Cornersteel Systems Corporation
                        </div>
                        <div class="flex flex-row">
                          <button class="text-blue-500 mr-2 hover:text-blue-300 transition duration-200">
                            <i class="far fa-edit"></i>
                          </button>
                          <button class="text-red-500 hover:text-red-300 transition duration-200">
                            <i class="far fa-trash-alt"></i>
                          </button>
                        </div>
                      </div>
                      <div class="text-white  text-justify">
                        Cornersteel Systems Corporation is a company where I
                        interned as a web developer. During my internship, I
                        learned and explored various technologies such as
                        Tailwind CSS, PHP, React, and Next.js. The experience
                        not only helped me grow as a developer but also allowed
                        me to develop my personality, focus more, and enjoy the
                        company of positive and energetic individuals.
                      </div>
                    </div>
                  </div>

                  <div class="w-full md:w-1/5  flex justify-center">
                    <div class="relative flex h-full w-1 bg-red-900 items-center justify-center">
                      <div class="absolute flex flex-col justify-center h-16 md:h-24 w-16 md:w-24 rounded-full border-2 border-red-300 leading-none text-center z-10 bg-red-900 font-thin text-white">
                        <div>JUNE</div>
                        <div>2024</div>
                      </div>
                    </div>
                  </div>

                  <div class="w-full md:w-2/5 px-2 py-4 md:py-10"></div>
                </div>
                <div class="flex flex-row w-full">
                  <div class="w-full md:w-2/5 px-2 py-4 md:py-10"></div>

                  <div class="w-full md:w-1/5  flex justify-center">
                    <div class="relative flex h-full w-1 bg-red-900 items-center justify-center">
                      <div class="absolute flex flex-col justify-center h-16 md:h-24 w-16 md:w-24 rounded-full border-2 border-red-300 leading-none text-center z-10 bg-red-900 font-thin text-white text-sm md:text-lg">
                        <div>MARCH</div>
                        <div>2020</div>
                      </div>
                    </div>
                  </div>

                  <div class="w-full md:w-2/5 px-2 py-4 md:py-10">
                    <div class="flex flex-col w-full rounded-lg shadow bg-gray-800 px-4 py-5">
                      <div class="text-white mb-2 flex justify-between">
                        <div class="font-bold">
                          Topserve Services Solutions INC.
                        </div>
                      </div>
                      <div class="text-white text-justify">
                        During my Senior high immersion, I had the opportunity
                        to work at Topserve Services Solutions INC. Cornersteel.
                        This experience was invaluable as I explored and learned
                        about web development. I created a simple website, which
                        allowed me to apply my skills in HTML, CSS, and
                        JavaScript. The supportive environment at Topserve
                        Services Solutions INC. Cornersteel encouraged me to
                        grow and develop my abilities, laying a strong
                        foundation for my future endeavors in technology.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
