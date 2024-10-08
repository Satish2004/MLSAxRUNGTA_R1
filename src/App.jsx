import React, { useState, useEffect } from "react";
import { gsap, CSSPlugin, Expo } from "gsap";
import OverAllSection from "./components/OverAllSection"; // Ensure the path is correct

gsap.registerPlugin(CSSPlugin);

function App() {
  const [counter, setCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter < 100) {
          return prevCounter + 1;
        } else {
          clearInterval(count);
          setIsLoading(false); // Stop loading
          reveal(); // Trigger the reveal animation
          return 100; // Ensure the counter doesn't exceed 100
        }
      });
    }, 25);
  }, []);

  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        console.log("Loader animation completed");
      },
    });
    t1.to(".follow", {
      width: "100%",
      ease: Expo.easeInOut,
      duration: 1.2,
      delay: 0.7,
    })
      .to(".hide", { opacity: 0, duration: 0.3 })
      .to(".hide", { display: "none", duration: 0.3 })
      .to(".follow", {
        height: "100%",
        ease: Expo.easeInOut,
        duration: 0.7,
        delay: 0.5,
      })
      .to(".content", { width: "100%", ease: Expo.easeInOut, duration: 0.7 })
      .to(".title-lines", { display: "block", duration: 0.1 })
      .to(".title-lines", {
        opacity: 1,
        stagger: 0.15,
        ease: Expo.easeInOut,
        duration: 0.6,
      });
  };

  return (
    <>
      {isLoading ? (
        <div className="loader h-screen w-screen bg-gray-600 flex justify-center items-center">
          <h1 className="counter text-9xl text-gray-400 fixed z-50">{counter}</h1>
          <div className="absolute inset-0 flex space-x-2">
            {Array(10)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="bar bg-black w-[10vw] h-screen"></div>
              ))}
          </div>
        </div>
      ) : (
        <OverAllSection /> // Render your main content after loading
      )}
    </>
  );
}

export default App;
