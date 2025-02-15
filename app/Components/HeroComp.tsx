import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
const HeroComp = () => {
  return (
    <section className="w-full h-full flex relative justify-center items-center object-contain p-2">
      <div
        className="absolute w-full h-full z-10 bg-white mix-blend-overlay"
        style={{ opacity: 0.6 }}
      ></div>
      <Link href={"/"} className="flex justify-center items-center">
        <motion.img
          src="/SVG/Bosoo.png"
          alt="icon"
          className="w-[40%] md:w-[60%] md:h-[60%]  z-20 "
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          // transition={{ duration: 0.3 }}
        />
      </Link>
    </section>
  );
};

export default HeroComp;
