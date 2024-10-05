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
      })
      .to(".container", {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
  };

  return (
    <div className="loader">
      {isLoading ? (
        <>
          <h1 className="counter">
            {counter}%
          </h1>
        </>
      ) : (
        <div className="container">
          <OverAllSection />
        </div>
      )}
    </div>
  );
};

export default Loader;
