"use client";
import React from "react";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io";
import Branches from "./Branches";
import { FaRegSquareCaretUp } from "react-icons/fa6";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center relative md:p-8 mt-[10px] md:mt-0 lg:w-10/12 lg:p-0 lg:mt-[24px] ">
      <motion.div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} // 90% black with 50% transparency
        className="w-full h-full flex justify-center items-center bg-black/50  shadow-lg z-20 "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full h-6/12 flex flex-col justify-start p-2">
          <div className="w-full h-auto flex flex-col md:flex-row justify-between items-center gap-8 p-2  ">
            <img
              src="/LogoWhite.png"
              alt="icon"
              className="w-[80%] md:[40%] h-[40%] lg:w-[40%] lg:p-8 z-20 "
            />
            <div className="w-full md:w-5/12 h-2/12 flex items-center rounded-xl p-8 bg-black/50 font-bold">
              <div className="text-sm text-white md:text-lg">
                VARJE BESÖK TILL NAGOMI KOMMER ANDRA TILL DINA SENASTE, SOM
                VISIONEN AV VÅRA CHEFS OCH MENYEN UTVECKLAR.
              </div>
            </div>
          </div>
          <div className="w-full h-auto flex flex-col md:flex-row justify-between items-center gap-8 p-2 ">
            <div className="w-full md:w-6/12 text-white text-lg font-bold bg-black/50 p-2 md:p-8 rounded-xl">
              Det är vårt mantra när vi strävar efter att leverera vårt bästa på
              alla sätt, varje dag
            </div>
            <div className="flex justify-end items-center gap-2">
              <IoLogoFacebook size={50} color="white" />
              <IoLogoInstagram size={50} color="white" />
              <div className="text-white text-md">
                <p>Öppettider</p>
                <p>Måndag – Fredag 11 – 20</p>
                <p>Lördag – Söndag 12 – 20</p>
              </div>
            </div>
          </div>
          <div className="w-full h-4/12 flex flex-col justify-between items-center gap-8 p-2 ">
            <div className="w-full text-white text-lg bg-black/50 p-8 rounded-xl">
              Från de färskaste råvarorna, skaldjuren och köttet som är etiskt
              framställt av våra leverantörer, till vår snabba och vänliga
              service, arbetar Nagomi Sushi Poke hårt för att erbjuda en
              sushiupplevelse utan dess like. Vi är ett familjeägt och driven
              företag. Vårt team och våra kunder är en viktig del av den
              familjen.
            </div>
            <div className="w-full flex flex-col md:flex-row justify-between items-center md:gap-8 ">
              <Branches
                id={1}
                branchName="Salbar1"
                branchAddress="3,4 horoolol"
                branchLocation="google map link1"
                branchPhone="99876880"
                img="/orebro.jfif"
              />
              <Branches
                id={2}
                branchName="Salbar2"
                branchAddress="Sukhbaatar "
                branchLocation="google map link2"
                branchPhone="99804781"
                img="/lindesberg.jfif"
              />
              <Branches
                id={3}
                branchName="Salbar3"
                branchAddress="Bayanzurkh horoolol"
                branchLocation="google map link3"
                branchPhone="99876880"
                img="/orebro.jfif"
              />
            </div>
          </div>
        </div>
      </motion.div>
      <a href="#top" className=" absolute bottom-4 right-4 text-white z-20">
        <FaRegSquareCaretUp size={50} />
      </a>
    </div>
  );
};

export default ContactPage;
