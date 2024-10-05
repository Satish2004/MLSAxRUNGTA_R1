import { motion } from "framer-motion";
import React from "react";
// UPCOMING EVENT PAGE

const Event = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.1"
      className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#1F3B61] "
      id="upcomingevent"
    >
      {/* Text Animation Section */}
      <div className="text border-t-2 border-b-2 border-zinc-400 flex overflow-hidden whitespace-nowrap pr-10">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 16 }}
          className="text-[14vw] leading-none font-semibold uppercase pt-5 mb-10 pr-20"
        >
          OUR UPCOMING EVENTS
        </motion.h1>
      </div>

      {/* Upcoming Events */}

      {/* Card Section */}
      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: [0.76, 0, 0.24, 1], duration: 4 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-5"
      >
        {/* Card 1 */}
        <div className="rounded-lg shadow-lg overflow-hidden">
          <div className="h-40 overflow-hidden">
            <img
              src="https://cdn.activestate.com/wp-content/uploads/2021/09/Sep-16-Workshop-Watch-Now-Cover.jpg"
              alt="Event 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-5">
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Tech Conference 2024
            </h2>
            <p className="text-gray-300">
              Join industry experts and learn about the latest trends in
              technology.
            </p>
            <a href="#">
              <button className="uppercase flex gap-7 px-4 py-4 bg-zinc-900 rounded-full items-center mt-5 text-white text-center hover:bg-gray-800">
                Learn more
                <div className="w-2 h-2 bg-zinc-50 rounded-full"></div>
              </button>
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-lg shadow-lg overflow-hidden">
          <div className="h-40 overflow-hidden">
            <img
              src="https://cdn.activestate.com/wp-content/uploads/2021/09/Sep-16-Workshop-Watch-Now-Cover.jpg"
              alt="Event 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-5">
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Hackathon 2024
            </h2>
            <p className="text-gray-300">
              Show your coding skills in our upcoming hackathon event.
            </p>
            <a href="#">
              <button className="uppercase flex gap-7 px-4 py-4 bg-zinc-900 rounded-full items-center mt-5 text-white text-center hover:bg-gray-800">
                Learn more
                <div className="w-2 h-2 bg-zinc-50 rounded-full"></div>
              </button>
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="rounded-lg shadow-lg overflow-hidden">
          <div className="h-40 overflow-hidden">
            <img
              src="https://cdn.activestate.com/wp-content/uploads/2021/09/Sep-16-Workshop-Watch-Now-Cover.jpg"
              alt="Event 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-5">
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Web Development Workshop
            </h2>
            <p className="text-gray-300">
              Learn the latest web technologies in this hands-on workshop.
            </p>
            <a href="#">
              <button className="uppercase flex gap-7 px-4 py-4 bg-zinc-900 mt-5 rounded-full items-center text-white text-center hover:bg-gray-800">
                Learn more
                <div className="w-2 h-2 bg-zinc-50 rounded-full"></div>
              </button>
            </a>
          </div>
        </div>

        {/* Card 4 */}
        <div className="rounded-lg shadow-lg overflow-hidden">
          <div className="h-40 overflow-hidden">
            <img
              src="https://cdn.activestate.com/wp-content/uploads/2021/09/Sep-16-Workshop-Watch-Now-Cover.jpg"
              alt="Event 4"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-5">
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              AI & ML Seminar
            </h2>
            <p className="text-gray-300">
              Explore the advancements in Artificial Intelligence and Machine
              Learning.
            </p>
            <a href="#">
              <button className="uppercase flex gap-7 px-4 py-4 bg-zinc-900 rounded-full items-center mt-5 text-white text-center hover:bg-gray-800">
                Learn more
                <div className="w-2 h-2 bg-zinc-50 rounded-full"></div>
              </button>
            </a>
          </div>
        </div>

        {/* Card 5 */}
        <div className="rounded-lg shadow-lg overflow-hidden">
          <div className="h-40 overflow-hidden">
            <img
              src="https://cdn.activestate.com/wp-content/uploads/2021/09/Sep-16-Workshop-Watch-Now-Cover.jpg"
              alt="Event 5"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-5">
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Blockchain Bootcamp
            </h2>
            <p className="text-gray-300">
              Learn the fundamentals of blockchain technology.
            </p>
            <a href="#">
              <button className="uppercase flex gap-7 px-4 py-4 bg-zinc-900 rounded-full items-center mt-5 text-white text-center hover:bg-gray-800">
                Learn more
                <div className="w-2 h-2 bg-zinc-50 rounded-full"></div>
              </button>
            </a>
          </div>
        </div>

        {/* Card 6 */}
        <div className="rounded-lg shadow-lg overflow-hidden">
          <div className="h-40 overflow-hidden">
            <img
              src="https://cdn.activestate.com/wp-content/uploads/2021/09/Sep-16-Workshop-Watch-Now-Cover.jpg"
              alt="Event 6"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-5">
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Cybersecurity Awareness
            </h2>
            <p className="text-gray-300">
              Protect yourself and your data in the digital world.
            </p>
            <a href="#">
              <button className="uppercase flex gap-7 px-4 py-4 bg-zinc-900 rounded-full items-center mt-5 text-white text-center hover:bg-gray-800">
                Learn more
                <div className="w-2 h-2 bg-zinc-50 rounded-full"></div>
              </button>
            </a>
          </div>
        </div>

        {/* Add more events if needed */}
      </motion.div>
    </div>
  );
};

export default Event;
