import { motion } from "framer-motion";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.7"
      className="w-full h-screen bg-[#0078D3] pt-1" id="home"
    >
      <div className="textStructure mt-52">
        <div className="w-fit items-center">
          <div className="masker">
            <motion.h1
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
              className="px-20 uppercase leading-[6.5vw] tracking-tighter font-medium text-9xl font-['Founders_Grotesk']"
            >
              Are you{" "}
            </motion.h1>
          </div>

          {/* Motion applied only to "Excited to" */}
          <div className="masker">
            <motion.h1
              initial={{ x: "7%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 3 }}
              className="px-20 uppercase leading-[6.5vw] tracking-tighter font-medium text-9xl font-['Founders_Grotesk']"
            >
              Excited to{" "}
            </motion.h1>
          </div>

          <div className="masker">
            <motion.h1
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 4 }}
              className="px-20 uppercase leading-[6.5vw] tracking-tighter font-medium text-[7.5vw] font-['Founders_Grotesk']"
            >
              join?
            </motion.h1>
          </div>
        </div>

        {/* AFTER HORIZONTAL LINE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 2 }}
          className="border-t-[1px] border-zinc-800 mt-12 flex items-center justify-between py-5 px-20"
        >
          <motion.p
            initial={{ y: "-500%" }}
            animate={{ y: 0 }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 3 }}
            className="text-md font-light tracking-tight leading-none uppercase"
          >
            For All Students
          </motion.p>
          <motion.p
            initial={{ y: "500%" }}
            animate={{ y: 0 }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 3 }}
            className="text-md font-light tracking-tight leading-none uppercase"
          >
            Get Notify
          </motion.p>

          <a href="#">
            <button className="uppercase flex gap-7 px-4 py-4 bg-zinc-900 rounded-full items-center mt-5 text-white text-center hover:bg-gray-800">
              Join our community
              <motion.span
                initial={{ rotate: "-180deg" }}
                animate={{ rotate: 0 }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 2 }}
                className=""
              >
                {" "}
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
