import React, { useEffect, useState } from "react";
import gsap, { Expo } from "gsap";
import OverAllSection from "../components/OverAllSection";
import "./loader.css";

const Loader = () => {
  const [counter, setCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter >= 100) {
          clearInterval(count);
          setIsLoading(false);
          reveal();
          return 100;
        }
        return prevCounter + 1;
      });
    }, 25);
  }, []);

  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        console.log("Loader animation completed");
      },
    });
    t1.to(".container", {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: Expo.easeOut,
    });
  };

  return (
    <div className="loader">
      {isLoading ? (
        <h1 className="counter">
          {counter}%
        </h1>
      ) : (
        <div className="container">
          <OverAllSection />
        </div>
      )}
    </div>
  );
};

export default Loader;
