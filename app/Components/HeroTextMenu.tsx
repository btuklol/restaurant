"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Menu from "./Menu";

const HeroTextMenu = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className={`w-6/12 h-3/6 flex justify-center items-center relative `}>
      <div className="relative top-0 left-0 w-full h-full flex justify-center items-center bg-transparent z-10 ">
        <div
          className={`w-full h-full bg-black absolute z-0 `}
          style={{ opacity: 0.5 }}
        ></div>

        <motion.h1
          onClick={handleClick}
          className={`lilita-one-regular relative cursor-pointer h1 text-outline text-transparent text-outline-hover text-[40px] xl:text-[140px] md:text-[100px] sm:text-[40px] `}
          initial={{ y: 0 }}
          animate={{ y: click ? -50 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {" "}
            BESTÄLLA{" "}
          </motion.button>
        </motion.h1>
        {click && <Menu />}
      </div>
    </div>
  );
};

export default HeroTextMenu;
