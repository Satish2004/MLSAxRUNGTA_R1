import React from "react";
import Navbar from "../components/Navbar";
import LandingPage from "../components/LandingPage";
import Event from "../components/Event";
import Footer from "../components/Footer";
import Members from "../components/Members";
import Resources from "../components/Resources";
import LocomotiveScroll from "locomotive-scroll";
const OverAllSection = () => {
  // added --> locomotive 

  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full min-h-screen bg-black text-white ">
      <Navbar></Navbar>
      <LandingPage></LandingPage>
      <Event></Event>
      <Members></Members>
      <Resources></Resources>

      <Footer></Footer>
    </div>
  );
};

export default OverAllSection;
