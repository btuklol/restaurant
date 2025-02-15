"use client";
import React from "react";
import { useState } from "react";
interface MenuBtnProps {
  title: string;
}
const MenuBtn = ({ title }: MenuBtnProps) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="flex w-[160px] h-[65px] mt-[5px] max-sm:w-[140px] max-sm:h-[40px]  rounded-[10px] relative overflow-hidden ">
      <div className="w-full h-full bg-black" style={{ opacity: 0.5 }}></div>
      <button
        onClick={() => handleClick}
        className="w-full h-full text-white text-center absolute z-20 top-0 left-0 font-bold text-xl"
      >
        {title}
      </button>
    </div>
  );
};
export default MenuBtn;
