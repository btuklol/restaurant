"use client";
import ContactUs from "./ContactUs";
import HeroComp from "./HeroComp";
import HeroText from "./HeroText";
import HeroTextMenu from "./HeroTextMenu";

const Hero = () => {
  return (
    <div className="relative w-screen h-screen flex justify-center items-center lg:h-[858px]   ">
      <div className="absolute  w-full h-auto flex justify-center items-center p-4 lg:p-1 top-5 left-0  md:h-auto md:justify-center md:flex lg:h-[856px] lg:mt-0  md:flex-wrap flex-col md:flex-row z-10 gap-1 md:gap-2 ">
        <div className="w-full h-[260px] md:w-[300px] md:h-[300px] lg:h-[426px] lg:w-5/12 flex justify-center items-center relative ">
          <HeroComp />
        </div>
        <div
          className={`w-full h-[180px] md:w-[300px] md:h-[350px] lg:h-[426px] lg:w-5/12  flex justify-center items-center relative `}
        >
          <HeroTextMenu />
        </div>
        <div className="w-full h-[180px] md:w-[300px] md:h-[350px] lg:h-[426px] lg:w-5/12 flex justify-center items-center bg-transparent relative ">
          <ContactUs />
        </div>
        <div
          className={`w-full h-[180px] md:w-[300px] md:h-[350px] lg:h-[426px] lg:w-5/12 flex justify-center items-center relative `}
        >
          <HeroText />
        </div>
      </div>
    </div>
  );
};

export default Hero;
