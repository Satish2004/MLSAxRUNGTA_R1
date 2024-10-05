import { motion } from "framer-motion";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.7"
      className="w-full h-screen bg-[#0078D3] pt-1"
      id="home"
    >
      <div className="textStructure mt-24 sm:mt-32 md:mt-40 lg:mt-52">
        <div className="w-fit items-center">
          <div className="masker">
            <motion.h1
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
              className="px-5 sm:px-10 md:px-16 lg:px-20 uppercase leading-[12vw] sm:leading-[10vw] md:leading-[8vw] lg:leading-[6.5vw] tracking-tighter font-medium text-[12vw] sm:text-[10vw] md:text-[9vw] lg:text-9xl font-['Founders_Grotesk']"
            >
              Are you{" "}
            </motion.h1>
          </div>

          <div className="masker">
            <motion.h1
              initial={{ x: "7%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 3 }}
              className="px-5 sm:px-10 md:px-16 lg:px-20 uppercase leading-[12vw] sm:leading-[10vw] md:leading-[8vw] lg:leading-[6.5vw] tracking-tighter font-medium text-[12vw] sm:text-[10vw] md:text-[9vw] lg:text-9xl font-['Founders_Grotesk']"
            >
              Excited to{" "}
            </motion.h1>
          </div>

          <div className="masker">
            <motion.h1
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 4 }}
              className="px-5 sm:px-10 md:px-16 lg:px-20 uppercase leading-[12vw] sm:leading-[10vw] md:leading-[8vw] lg:leading-[6.5vw] tracking-tighter font-medium text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[7.5vw] font-['Founders_Grotesk']"
            >
              join?
            </motion.h1>
          </div>
        </div>

        {/* Horizontal line section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 2 }}
          className="border-t-[1px] border-zinc-800 mt-8 sm:mt-10 lg:mt-12 flex items-center justify-between py-4 px-5 sm:px-10 md:px-16 lg:px-20"
        >
          <motion.p
            initial={{ y: "-500%" }}
            animate={{ y: 0 }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 3 }}
            className="text-sm sm:text-md font-light tracking-tight leading-none uppercase"
          >
            For All Students
          </motion.p>
          <motion.p
            initial={{ y: "500%" }}
            animate={{ y: 0 }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 3 }}
            className="text-sm sm:text-md font-light tracking-tight leading-none uppercase"
          >
            Get Notify
          </motion.p>

          <a href="#">
            <button className="uppercase flex gap-3 sm:gap-5 lg:gap-7 px-3 py-3 sm:px-4 sm:py-4 bg-zinc-900 rounded-full items-center mt-4 sm:mt-5 text-white text-sm sm:text-md hover:bg-gray-800">
              Join our community
              <motion.span
                initial={{ rotate: "-180deg" }}
                animate={{ rotate: 0 }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 2 }}
              >
                <FaArrowRight />
              </motion.span>
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
