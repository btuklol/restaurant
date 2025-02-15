"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const ContactUs = () => {
  return (
    <div className="w-full h-full flex justify-center items-center bg-transparent relative">
      <div
        className="w-full h-full bg-green-700"
        style={{ opacity: 0.5 }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-transparent z-10">
        <ScrollLink to="contact" smooth={true} duration={500}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="lilita-one-regular h1 text-outline text-transparent text-outline-hover text-[40px] xl:text-[130px] text-[70px] "
          >
            KONTAKT <br />
            OSS
          </motion.button>
        </ScrollLink>
      </div>
    </div>
  );
};

export default ContactUs;
