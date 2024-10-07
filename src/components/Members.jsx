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
      data-scroll-speed="-.6"
      className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#06171f]"
      id="teammember"
    >
      {/* Text Section */}
      {/* Text Animation Section */}
      <div className="text border-t-2 border-b-2 border-zinc-400 flex overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 16 }}
          className="text-[14vw] leading-none font-semibold uppercase pt-5 mb-10 pr-10"
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
        <div className="rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <div className="w-40 h-40">
            <img
              src="/Members/Sayan Karmakar.jpg"
              alt="member1"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="p-5 text-center">
            <h2 className="text-xl font-semibold mb-2">Sayan Karmakar</h2>
            <p className="text-gray-300">MLSA Student Ambassador</p>
            <div className="mt-4 flex justify-center space-x-4">
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
        <div className="rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <div className="w-40 h-40">
            <img
              src="/Members/Shubham.jpg"
              alt="member2"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="p-5 text-center">
            <h2 className="text-xl font-semibold mb-2">Shubham</h2>
            <p className="text-gray-300">Tech Lead Ambassador</p>
            <div className="mt-4 flex justify-center space-x-4">
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
        <div className="rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <div className="w-40 h-40">
            <img
              src="/Members/Satish Chandra.jpg"
              alt="member3"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="p-5 text-center">
            <h2 className="text-xl font-semibold mb-2">Satish Chandra</h2>
            <p className="text-gray-300">Tech Lead</p>
            <div className="mt-4 flex justify-center space-x-4">
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

        {/* Repeat for additional members as needed */}

        {/* Card 3 */}
        <div className="rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <div className="w-40 h-40">
            <img
              src="https://img.lovepik.com/png/20230929/vector-thief-characters-illustrated-people-cartoon-character_17289_wh1200.png"
              alt="member3"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="p-5 text-center">
            <h2 className="text-xl font-semibold mb-2">Member 3 name</h2>
            <p className="text-gray-300">Member 3 field</p>
            <div className="mt-4 flex justify-center space-x-4">
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
        <div className="rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <div className="w-40 h-40">
            <img
              src="https://img.lovepik.com/png/20230929/vector-thief-characters-illustrated-people-cartoon-character_17289_wh1200.png"
              alt="member3"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="p-5 text-center">
            <h2 className="text-xl font-semibold mb-2">Member 3 name</h2>
            <p className="text-gray-300">Member 3 field</p>
            <div className="mt-4 flex justify-center space-x-4">
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
        <div className="rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <div className="w-40 h-40">
            <img
              src="https://img.lovepik.com/png/20230929/vector-thief-characters-illustrated-people-cartoon-character_17289_wh1200.png"
              alt="member3"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="p-5 text-center">
            <h2 className="text-xl font-semibold mb-2">Member 3 name</h2>
            <p className="text-gray-300">Member 3 field</p>
            <div className="mt-4 flex justify-center space-x-4">
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
        <div className="rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <div className="w-40 h-40">
            <img
              src="https://img.lovepik.com/png/20230929/vector-thief-characters-illustrated-people-cartoon-character_17289_wh1200.png"
              alt="member3"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="p-5 text-center">
            <h2 className="text-xl font-semibold mb-2">Member 3 name</h2>
            <p className="text-gray-300">Member 3 field</p>
            <div className="mt-4 flex justify-center space-x-4">
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
        <div className="rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <div className="w-40 h-40">
            <img
              src="https://img.lovepik.com/png/20230929/vector-thief-characters-illustrated-people-cartoon-character_17289_wh1200.png"
              alt="member3"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="p-5 text-center">
            <h2 className="text-xl font-semibold mb-2">Member 3 name</h2>
            <p className="text-gray-300">Member 3 field</p>
            <div className="mt-4 flex justify-center space-x-4">
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
        <div className="rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <div className="w-40 h-40">
            <img
              src="https://img.lovepik.com/png/20230929/vector-thief-characters-illustrated-people-cartoon-character_17289_wh1200.png"
              alt="member3"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="p-5 text-center">
            <h2 className="text-xl font-semibold mb-2">Member 3 name</h2>
            <p className="text-gray-300">Member 3 field</p>
            <div className="mt-4 flex justify-center space-x-4">
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
        <div className="rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <div className="w-40 h-40">
            <img
              src="https://img.lovepik.com/png/20230929/vector-thief-characters-illustrated-people-cartoon-character_17289_wh1200.png"
              alt="member3"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="p-5 text-center">
            <h2 className="text-xl font-semibold mb-2">Member 3 name</h2>
            <p className="text-gray-300">Member 3 field</p>
            <div className="mt-4 flex justify-center space-x-4">
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
        <div className="rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <div className="w-40 h-40">
            <img
              src="https://img.lovepik.com/png/20230929/vector-thief-characters-illustrated-people-cartoon-character_17289_wh1200.png"
              alt="member3"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="p-5 text-center">
            <h2 className="text-xl font-semibold mb-2">Member 3 name</h2>
            <p className="text-gray-300">Member 3 field</p>
            <div className="mt-4 flex justify-center space-x-4">
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
        <div className="rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <div className="w-40 h-40">
            <img
              src="https://img.lovepik.com/png/20230929/vector-thief-characters-illustrated-people-cartoon-character_17289_wh1200.png"
              alt="member3"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="p-5 text-center">
            <h2 className="text-xl font-semibold mb-2">Member 3 name</h2>
            <p className="text-gray-300">Member 3 field</p>
            <div className="mt-4 flex justify-center space-x-4">
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
        <div className="rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <div className="w-40 h-40">
            <img
              src="https://img.lovepik.com/png/20230929/vector-thief-characters-illustrated-people-cartoon-character_17289_wh1200.png"
              alt="member3"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="p-5 text-center">
            <h2 className="text-xl font-semibold mb-2">Member 3 name</h2>
            <p className="text-gray-300">Member 3 field</p>
            <div className="mt-4 flex justify-center space-x-4">
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
        <div className="rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <div className="w-40 h-40">
            <img
              src="https://img.lovepik.com/png/20230929/vector-thief-characters-illustrated-people-cartoon-character_17289_wh1200.png"
              alt="member3"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="p-5 text-center">
            <h2 className="text-xl font-semibold mb-2">Member 3 name</h2>
            <p className="text-gray-300">Member 3 field</p>
            <div className="mt-4 flex justify-center space-x-4">
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
