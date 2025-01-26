"use client";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
const HeroText = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div
      className={`w-6/12 h-3/6 flex justify-center items-center bg-transparent relative `}
    >
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-transparent z-10 ">
        <button onClick={handleClick}>
          <Link href="/Menu">
            <motion.h1
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className={`lilita-one-regular h1 text-outline text-transparent text-outline-hover text-[60px] xl:text-[180px] md:text-[130px] `}
            >
              MENU
            </motion.h1>
          </Link>
        </button>
      </div>
      <div
        className={`w-full h-full bg-red-500 mix-blend-overlay `}
        style={{ opacity: 0.5 }}
      ></div>
    </div>
  );
};

export default HeroText;
