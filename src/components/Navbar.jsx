import { motion } from "framer-motion";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed z-[999] w-full px-20 py-8 flex justify-between items-center font-['Neue Montreal'] bg-white/5 rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[0.1px]">
      <motion.div
        initial={{ y: "-400%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
        className="logo text-xl font-bold"
      >
        MLSA - RUNGTA  
        {/* add logo  */}
      </motion.div>
      <div className="links flex space-x-8 uppercase">
        <div>
          <motion.a
            href="#home"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
            className="text-lg font-light uppercase"
          >
            Home
          </motion.a>
        </div>
        <div>
          <motion.a
            href="#upcomingevent"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 2 }}
            className="text-lg font-light uppercase"
          >
            Upcoming Events
          </motion.a>
        </div>
        <div>
          <motion.a
            href="#teammember"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 3 }}
            className="text-lg font-light uppercase"
          >
            Team Members
          </motion.a>
        </div>
        <div>
          <motion.a
            href="#resources"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 3 }}
            className="text-lg font-light uppercase"
          >
            Resources
          </motion.a>
        </div>
     
        <div>
          <motion.a
            href="#about"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 4 }}
            className="text-lg font-light uppercase"
          >
            About Us
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
