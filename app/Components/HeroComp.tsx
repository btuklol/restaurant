import { log } from "console";
import React from "react";

const HeroComp = () => {
  return (
    <section className="w-6/12 h-3/6 flex relative ">
      <div
        className="w-full h-full flex justify-center items-center bg-white transparent-50 p-8"
        style={{ opacity: 0.7 }}
      ></div>
      <div className=" absolute top-0 left-48 aw-full h-full flex justify-center items-center bg-transparent z-10 p-8">
        {/* <img
          src="./Bosoo.svg"
          alt="icon"
          style={{ height: "100%", width: "auto", objectFit: "contain" }}
        /> */}
      </div>
    </section>
  );
};

export default HeroComp;
