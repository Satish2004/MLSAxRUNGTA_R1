import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const Members = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.1"
      className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]"
      id="teammember"
    >
      {/* Text Section */}
      {/* Text Animation Section */}
      <div className="text border-t-2 border-b-2 border-zinc-400 flex  overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 16 }}
          className="text-[14vw] leading-none font-semibold uppercase pt-5 mb-10 pr-10 "
        >
          Meet our dynamic team
        </motion.h1>
      </div>

      {/* Card Section */}
      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: [0.76, 0, 0.24, 1], duration: 5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-5"
      >
        {/* Card 1 */}
        <div className="rounded-lg shadow-lg overflow-hidden">
          <div className="h-40 overflow-hidden">
            <img
              src="https://img.lovepik.com/png/20230929/vector-thief-characters-illustrated-people-cartoon-character_17289_wh1200.png"
              alt="member1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-5">
            <h2 className="text-xl font-semibold mb-2">Member 1 name</h2>
            <p className="text-gray-300">member 1 field</p>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-zinc-300 text-2xl"
                />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-zinc-300 text-2xl"
                />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-zinc-300 text-2xl"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-lg shadow-lg overflow-hidden">
          <div className="h-40 overflow-hidden">
            <img
              src="https://img.lovepik.com/png/20230929/vector-thief-characters-illustrated-people-cartoon-character_17289_wh1200.png"
              alt="member2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-5">
            <h2 className="text-xl font-semibold mb-2">Member 2 name</h2>
            <p className="text-gray-300">memeber 2 field</p>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-zinc-300 text-2xl"
                />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-zinc-300 text-2xl"
                />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-zinc-300 text-2xl"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="rounded-lg shadow-lg overflow-hidden">
          <div className="h-80 overflow-hidden">
            <img
              src="/public/Raunit.jpg"
              alt="member3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-5">
            <h2 className="text-xl font-semibold mb-2">Member 3 name</h2>
            <p className="text-gray-300">Member 3 field</p>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-zinc-300 text-2xl"
                />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-zinc-300 text-2xl"
                />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-zinc-300 text-2xl"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="rounded-lg shadow-lg overflow-hidden">
          <div className="h-80 overflow-hidden">
            <img
              src="/public/raju.jpg"
              alt="member4"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-5">
            <h2 className="text-xl font-semibold mb-2">member 4 name</h2>
            <p className="text-gray-300">member 4 feild</p>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-zinc-300 text-2xl"
                />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-zinc-300 text-2xl"
                />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-zinc-300 text-2xl"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="rounded-lg shadow-lg overflow-hidden relative">
  {/* Profile Picture */}
  <div className="h-80 overflow-hidden">
    <img
      src="/public/manshi.jpg"
      alt="member5"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="p-5">
    {/* Name and Role */}
    <h2 className="text-xl font-semibold mb-2">Mansh Verma</h2>
    <p className="text-gray-300">Lead: Outreach & Connections</p>

    {/* Gamified XP, Level, and Progress */}
    <div className="mt-4">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-300">Level 5</p>
        <p className="text-sm text-gray-300">XP: 1200 / 1500</p>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2.5 mt-1">
        <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "80%" }}></div>
      </div>
    </div>

    {/* Quests / Challenges */}
    <div className="mt-4">
      <h3 className="text-sm text-yellow-400 font-semibold">Daily Challenges</h3>
      <ul className="mt-2 space-y-2 text-sm text-gray-200">
        <li>✔️ Connect with 3 new people (+100 XP)</li>
        <li>🔲 Complete your profile (+50 XP)</li>
        <li>🔲 Share your profile (+50 XP)</li>
      </ul>
    </div>

    {/* Achievements and Badges */}
    <div className="mt-4 flex space-x-2">
      <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full">Badge: Outreach Master</span>
      <span className="text-xs bg-yellow-500 text-white px-2 py-1 rounded-full">Badge: Connector</span>
      <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">Newbie</span>
    </div>

    {/* Leaderboard & Rank */}
    <div className="mt-4">
      <h3 className="text-sm text-yellow-400 font-semibold">Leaderboard Rank</h3>
      <p className="text-sm text-gray-300">#25 / 500 (Top 5%)</p>
    </div>

    {/* Social Media Icons */}
    <div className="mt-4 flex space-x-4">
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          className="text-zinc-300 text-2xl hover:text-blue-400 transition-colors duration-300"
        />
      </a>
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faTwitter}
          className="text-zinc-300 text-2xl hover:text-blue-400 transition-colors duration-300"
        />
      </a>
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faFacebook}
          className="text-zinc-300 text-2xl hover:text-blue-400 transition-colors duration-300"
        />
      </a>
    </div>

    {/* Power-Up and Special Offer */}
    <div className="mt-6 bg-indigo-600 text-white p-3 rounded-lg text-center transition-opacity duration-300 hover:bg-indigo-700">
      🎉 Power-Up Available: Share Profile for +200 XP!
    </div>
  </div>

  {/* Popup hover effect for XP increase */}
  <div className="absolute top-0 right-0 p-2 bg-gray-900 text-white rounded-lg text-xs opacity-0 hover:opacity-100 transition-opacity duration-300">
    +50 XP for Profile Visit!
  </div>
</div>


        {/* Card 6 */}
        <div className="rounded-lg shadow-lg overflow-hidden">
          <div className="h-40 overflow-hidden">
            <img
              src="https://img.lovepik.com/png/20230929/vector-thief-characters-illustrated-people-cartoon-character_17289_wh1200.png"
              alt="member6"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-5">
            <h2 className="text-xl font-semibold mb-2">member 6</h2>
            <p className="text-gray-300">feild</p>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-zinc-300 text-2xl"
                />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-zinc-300 text-2xl"
                />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-zinc-300 text-2xl"
                />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Members;
