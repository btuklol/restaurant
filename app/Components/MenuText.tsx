"use client";
import { useState } from "react";
interface HeroTextProps {
  title: string;

  bgColor?: string;
}

const HeroText = ({ title, bgColor }: HeroTextProps) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div
      className={`w-6/12 h-3/6 flex justify-center items-center bg-transparent relative `}
    >
      <div
        className={`w-full h-full ${bgColor}`}
        style={{ opacity: 0.5 }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-transparent z-10">
        <button onClick={handleClick}>
          <h1
            className={`lilita-one-regular h1 text-outline text-transparent  text-outline-hover text-[40px] xl:text-[140px] md:text-[100px] sm:text-[40px]`}
          >
            {title}
          </h1>
        </button>
      </div>
    </div>
  );
};

export default HeroText;
