import React, { useEffect, useState } from "react";

const Resources = () => {
  const [rotate, setRotate] = useState(0);
  const [backDotRotate, setBackDotRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
      setBackDotRotate((prev) => prev + (angle - 180 - prev) * 0.2);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="eyes w-full h-screen overflow-hidden flex items-center justify-center relative"
      id="resources"
    >
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.3"
        className="absolute inset-0 bg-cover bg-center bg-yellow-500 rounded-tl-3xl rounded-tr-3xl flex items-center justify-center"
      >
        <h1 className="leading-tight text-[5rem] sm:text-[7rem] md:text-[8rem] lg:text-[10rem] whitespace-normal text-white font-bold w-full h-50 bg-cover bg-center text-center rounded-lg p-10 sm:p-16 lg:p-20 containerBackground">
          <span className="uppercase resourcesText">
            Are you looking for resources?
          </span>
        </h1>
      </div>

      {/* Eyes Section */}
      <div className="relative w-full flex gap-16 justify-center">
        {/* First Eye */}
        <div className="w-[13vw] h-[13vw] flex items-center justify-center bg-white rounded-full">
          <div className="bg-black w-2/3 h-2/3 rounded-full relative">
            {/* Main dot following the mouse */}
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }}
              className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
            >
              <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center"></div>
            </div>

            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${backDotRotate}deg)`,
              }}
              className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
            ></div>
          </div>
        </div>

        {/* Second Eye */}
        <div className="w-[13vw] h-[13vw] bg-white rounded-full flex items-center justify-center">
          <div className="bg-black w-2/3 h-2/3 rounded-full relative">
            {/* Main dot following the mouse */}
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }}
              className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
            >
              <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center"></div>
            </div>

            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${backDotRotate}deg)`,
              }}
              className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
            ></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 flex m-10">
        <a href="https://mvp.microsoft.com/en-US/studentambassadors/milestones">
          <button className="uppercase flex gap-7 px-10 py-6 bg-zinc-900 rounded-tl-full rounded-tr-full items-center text-white text-center hover:bg-gray-800 transition-all duration-300">
            Resources
            <div className="w-2 h-2 bg-zinc-50 rounded-full"></div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Resources;
