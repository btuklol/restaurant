"use client";
import ContactUs from "./ContactUs";
import HeroComp from "./HeroComp";
import HeroText from "./HeroText";
import HeroTextMenu from "./HeroTextMenu";

const Hero = () => {
  return (
    <div className="relative w-screen h-screen flex justify-center items-center border ">
      <div className="absolute top-0 left-0 mx-auto w-full h-screen flex justify-center flex-wrap items-center z-10 gap-2">
        <div className="w-5/12 h-3/6 flex justify-center items-center relative">
          <HeroComp />
        </div>
        <div
          className={`w-5/12 h-3/6 flex justify-center items-center relative `}
        >
          <HeroTextMenu />
        </div>
        <div className="w-5/12 h-3/6 flex justify-center items-center bg-transparent relative">
          <ContactUs />
        </div>
        <div
          className={`w-5/12 h-3/6 flex justify-center items-center relative `}
        >
          <HeroText />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
