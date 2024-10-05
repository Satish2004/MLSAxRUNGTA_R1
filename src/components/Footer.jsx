import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="w-full p-20 bg-white rounded-tl-3xl rounded-tr-3xl text-black " id="about">
      {/* About our community */}
      <h1 className='font-["Neue_Montreal"] text-[3vw] leading-[3.5vw] tracking-tight text-center'>
        Join our global community of students who are passionate about building
        AI-driven solutions with Microsoft technology. Accelerate innovation and
        grow the skills you need to have greater impact in the projects and
        communities that matter to you.
      </h1>

      {/* Divider */}
      <div className=" flex gap-5 w-full border-t-[2px] border-slate-600 p-20 m-20 pt-10 mt-10">
        {/* text -1/2 */}
        <div className="w-1/2  ">
          <h1 className="text-3xl uppercase">Our Approach</h1>
          <a href="#">
            <button className=" uppercase flex gap-7 mt-4 px-10 py-6 bg-zinc-900 rounded-full items-center  text-white text-center">
              Read More
              <div className="  w-2 h-2 bg-zinc-50 rounded-full text-center"></div>
            </button>
          </a>
        </div>
        {/* Picture 1/2 */}
        <div className="w-1/2 h-[60vh] rounded-3xl bg-[#7E53C1]"></div>
      </div>

      {/* Links Section */}
      <div className="text-center mt-10">
        <h2 className="text-2xl font-semibold mb-4">Explore More:</h2>
        <ul className="space-y-2">
          <li>
            <a
              href="https://studentdeveloper.microsoft.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Student Developer Blog
            </a>
          </li>
          <li>
            <a
              href="https://founders.microsoft.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Founders Hub
            </a>
          </li>
          <li>
            <a
              href="https://aka.ms/training"
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
              href="https://imaginecup.microsoft.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Imagine Cup
            </a>
          </li>
          <li>
            <a
              href="https://careers.microsoft.com/students"
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
        {" "}
        <h2 className="text-2xl font-semibold mb-4">Follow Us:</h2>
      </div>

      <div className="flex justify-center space-x-6 mt-10">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-blue-600 text-2xl"
          />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-blue-400 text-2xl"
          />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-blue-700 text-2xl"
          />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-purple-600 text-2xl"
          />
        </a>
      </div>
      <p className="text-center font-semibold text-[0.6rem] mt-14">
        &copy; {new Date().getFullYear()} Microsoft Learn Student Ambassadors -
        RCET. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
