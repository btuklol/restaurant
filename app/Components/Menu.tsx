"use client";
import React from "react";
import MenuBtn from "./MenuBtn";
import { useState } from "react";
import { motion } from "framer-motion";
const Menu = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div
      className="absolute right-0 bottom-0 w-full h-[100px] flex flex-col justify-end items-end px-4 py-2  "
      onClick={handleClick}
    >
      <div className="flex justify-between max-sm:flex-col items-end relative w-full h-full bg-transparent z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <a href="#1">
            {" "}
            <MenuBtn title="Obrsor" />{" "}
          </a>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a href="#2">
            {" "}
            <MenuBtn title="Obrsor2" />{" "}
          </a>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="#3">
            {" "}
            <MenuBtn title="Салбар 3" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Menu;
