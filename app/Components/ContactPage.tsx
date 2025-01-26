"use client";
import React from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <motion.div
      className="w-full h-full flex justify-center items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white p-8 rounded shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg">Feel free to reach out to us!</p>
      </div>
    </motion.div>
  );
};

export default ContactPage;
