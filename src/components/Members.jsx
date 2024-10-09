import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import TeamCard from "./TeamCard";

const Members = () => {
  
  return (
    <div
     
      className="w-full h-auto py-20 rounded-tl-3xl rounded-tr-3xl bg-[#06171f]"
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

    {/* Team Cards photo */}
    <TeamCard />

    </div>
  );
};

export default Members;
