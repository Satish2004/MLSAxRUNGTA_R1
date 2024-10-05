import { motion } from "framer-motion";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed z-[999] w-full px-6 lg:px-20 py-4 lg:py-8 flex justify-between items-center font-['Neue Montreal'] bg-white/5 rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[0.1px]">
      {/* Logo Section */}
      <motion.div
        initial={{ y: "-400%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
        className="logo text-xl lg:text-2xl font-bold"
      >
        MLSA - RUNGTA
      </motion.div>

      {/* Toggle Button (Visible on mobile) */}
      <div className="lg:hidden">
        <button
          onClick={handleToggle}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Links Section */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute lg:static top-16 left-0 lg:top-0 lg:left-0 w-full lg:w-auto bg-zinc-900 lg:bg-transparent lg:flex lg:space-x-8 uppercase text-center lg:text-left transition-all duration-300`}
      >
        <div className="links flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-8 py-4 lg:py-0">
          {/* Home Link */}
          <motion.a
            href="#home"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
            className="text-lg font-light uppercase text-white"
          >
            Home
          </motion.a>

          {/* Upcoming Events Link */}
          <motion.a
            href="#upcomingevent"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 2 }}
            className="text-lg font-light uppercase text-white "
          >
            Upcoming Events
          </motion.a>

          {/* Team Members Link */}
          <motion.a
            href="#teammember"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 3 }}
            className="text-lg font-light uppercase text-white"
          >
            Team Members
          </motion.a>

          {/* Resources Link */}
          <motion.a
            href="#resources"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 3 }}
            className="text-lg font-light uppercase text-white"
          >
            Resources
          </motion.a>

          {/* About Us Link */}
          <motion.a
            href="#about"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 4 }}
            className="text-lg font-light uppercase text-white "
          >
            About Us
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
