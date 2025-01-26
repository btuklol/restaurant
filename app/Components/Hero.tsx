"use client";
import React, { useState } from "react";
import HeroComp from "./HeroComp";
import HeroText from "./HeroText";
import MenuBtn from "./MenuBtn";
import HeroTextMenu from "./HeroTextMenu";
import ContactUs from "./ContactUs";

const Hero = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="relative w-screen h-screen flex justify-center items-center border ">
      <div className="absolute top-0 left-0 mx-auto w-full h-screen flex justify-center flex-wrap items-center z-10">
        <HeroComp />
        <HeroTextMenu />
        <ContactUs />
        <HeroText />
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
