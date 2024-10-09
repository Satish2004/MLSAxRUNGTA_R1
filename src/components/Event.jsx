import { motion } from "framer-motion";
import React from "react";
import EventsCard from "./EventsCard";

// UPCOMING EVENT PAGE
const Event = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full h-auto py-20 rounded-tl-3xl rounded-tr-3xl bg-[#CC6634]"
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

      <EventsCard />
    </div>
  );
};

export default Event;
