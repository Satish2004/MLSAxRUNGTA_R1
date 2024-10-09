import React from "react";
import { motion } from "framer-motion";

const EventsCard = () => {
  return (
    <div>
      {/* Card Section */}
      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: [0.76, 0, 0.24, 1], duration: 4 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-5"
      >
        {/* Card 1 */}
        <div className="rounded-3xl shadow-lg overflow-hidden h-[400px] flex flex-col  text-white EventCard">
          <div className="flex-grow overflow-hidden object-center">
            <img
              src="public/Events poster/Pythone challenge poster 3_page-0001.jpg"
              alt="Event 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-5 flex-grow flex flex-col justify-between">
            <div>
              <h2 className="text-lg md:text-xl font-semibold mb-2">
             Python Challenges
              </h2>
              <p className="text-black text-[1.2rem]">
            
               Date: 17/10/24
              </p>
            </div>
            <a href="https://chat.whatsapp.com/FlBnnFbKaWz8wnGhP9Exye">
              <button className="uppercase flex gap-7 px-4 py-4 bg-zinc-900 rounded-full items-center mt-5 text-white text-center hover:bg-gray-800">
                Learn more
                <div className="w-2 h-2 bg-zinc-50 rounded-full"></div>
              </button>
            </a>
          </div>
        </div>

        {/* Add more cards as needed */}
      </motion.div>
    </div>
  );
};

export default EventsCard;
