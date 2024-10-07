import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./FooterWave.css";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div
      className="w-full p-6 sm:p-10 md:p-16 lg:p-20 bg-white rounded-tl-3xl rounded-tr-3xl text-black"
      id="about"
    >
      {/* About our community */}
      <h1 className=' text-black font-semibold  font-["Neue_Montreal"] text-lg sm:text-2xl md:text-3xl lg:text-[3vw] leading-6 sm:leading-7 md:leading-8 lg:leading-[3.5vw] tracking-tight text-center'>
        Join our global community of students who are passionate about building
        AI-driven solutions with Microsoft technology. Accelerate innovation and
        grow the skills you need to have greater impact in the projects and
        communities that matter to you.
      </h1>

      {/* Divider */}
      <div className="flex flex-col md:flex-row gap-5 w-full border-t-[2px] border-slate-600 p-6 sm:p-10 md:p-16 lg:p-20 mt-10">
        {/* Text 1/2 */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-xl sm:text-2xl md:text-3xl uppercase text-black">
            Our Approach
          </h1>
          <a href="https://mvp.microsoft.com/studentambassadors">
            <button className="uppercase flex gap-4 sm:gap-6 md:gap-7 mt-4 px-8 sm:px-10 py-4 sm:py-5 bg-zinc-900 rounded-full items-center text-white hover:bg-gray-800 transition-all duration-300">
              Read More
              <div className="w-2 h-2 bg-zinc-50 rounded-full"></div>
            </button>
          </a>
        </div>
        {/* Picture 1/2 */}
        {/* <div className="w-full md:w-1/2 h-40 sm:h-[40vh] md:h-[60vh] rounded-3xl bg-[#7E53C1] items-center">
        <img src="public/levels.png" alt="" className="p-6 mt-16 " /></div>
      </div> */}
      </div>

      {/* Links Section */}
      <div className="text-center mt-10">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Explore More:
        </h2>
        <ul className="space-y-2 text-sm sm:text-base">
          <li>
            <a
              href="https://techcommunity.microsoft.com/t5/student-developer-blog/bg-p/StudentDeveloperBlog"
              target="_blank"
              rel="noopener noreferrer"
            >
              Student Developer Blog
            </a>
          </li>
          <li>
            <a
              href="https://foundershub.startups.microsoft.com/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              Founders Hub
            </a>
          </li>
          <li>
            <a
              href="https://learn.microsoft.com/en-us/training/student-hub/?WT.mc_id=StudentContent__-web-cxa"
              target="_blank"
              rel="noopener noreferrer"
            >
              Training
            </a>
          </li>
          <li>
            <a
              href="https://azure.microsoft.com/en-us/free/students/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Azure for Students
            </a>
          </li>
          <li>
            <a
              href="https://imaginecup.microsoft.com/en-us?ocid=pre_web_ambassador_learnmore_all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Imagine Cup
            </a>
          </li>
          <li>
            <a
              href="https://careers.microsoft.com/v2/global/en/students"
              target="_blank"
              rel="noopener noreferrer"
            >
              Internship
            </a>
          </li>
        </ul>
      </div>

      {/* Social Media Icons */}
      <div className="text-center mt-10">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Follow Us:</h2>
      </div>
      <div className="flex justify-center space-x-4 sm:space-x-6 mt-4">
        {/* <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-zinc-600 text-xl sm:text-2xl"
          />
        </a> */}
        <a
          href="https://x.com/mlsarcet"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-zinc-600 text-xl sm:text-2xl"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/microsoft-learn-student-ambassador-rcet/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-zinc-600 text-xl sm:text-2xl"
          />
        </a>
        <a
          href="https://www.instagram.com/mlsa.rcet"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-zinc-600 text-xl sm:text-2xl"
          />
        </a>
      </div>

      <p className="text-center font-semibold text-xs sm:text-sm mt-10 sm:mt-14">
        &copy; {new Date().getFullYear()} Microsoft Learn Student Ambassadors -
        RCET. All rights reserved.
        <br />
        <br />
        <p className=""> Developed by</p>
        <div className="flex flex-col items-center mt-10">
          {/* Developer 1 */}
          <div className="bg-black text-white p-4 rounded-lg shadow-lg mx-2 text-center w-30">
            <h2 className="font-semibold uppercase">Satish</h2>
            <div className="flex justify-center mt-2">
              <a
                href="https://www.linkedin.com/in/satish-chandra-9844b5250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-zinc-600 hover:text-blue-800 mr-2"
              >
                <FaLinkedin className="mr-1" />
              </a>
              <a
                href="https://github.com/Satish2004
"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-zinc-600 hover:text-gray-600"
              >
                <FaGithub className="mr-1" />
              </a>
            </div>
          </div>

          {/* Developer 2 */}
          <div className="bg-black text-white p-4 rounded-lg shadow-lg mx-2 mt-4 text-center w-">
            <h2 className="font-semibold uppercase">Subham</h2>
            <div className="flex justify-center mt-2">
              <a
                href="https://www.linkedin.com/in/shubham-yadav-07199a24b/
"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-zinc-600 hover:text-blue-800 mr-2"
              >
                <FaLinkedin className="mr-1" />
              </a>
              <a
                href="https://github.com/Shubham66020
"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-zinc-600 hover:text-gray-600"
              >
                <FaGithub className="mr-1" />
              </a>
            </div>
          </div>
        </div>
      </p>

      {/* WAVE start */}
      <div className="w-full">
        <svg
          className="waves w-full"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="var(--wave-color-1)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="var(--wave-color-2)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="var(--wave-color-3)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="7"
              fill="var(--wave-color-4)"
            />
          </g>
        </svg>
      </div>
      {/* <!--Waves end--> */}
    </div>
  );
};

export default Footer;
