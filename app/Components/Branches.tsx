import classNames from "classnames";
import { IoLocation } from "react-icons/io5";
import React from "react";
interface BranchesProps {
  id: number;
  branchName: string;
  branchLocation: string;
  branchAddress: string;
  branchPhone: string;
  img: string;
}

const Branches = ({
  branchAddress,
  branchLocation,
  branchName,
  branchPhone,
  img,
}: BranchesProps) => {
  return (
    <div className="max-w-xs w-full h-auto group/card rounded-lg ">
      <div
        className={classNames(
          " cursor-pointer overflow-hidden relative card h-auto rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4"
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <IoLocation color="white" />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              {branchLocation}
            </p>
          </div>
        </div>
        <div className="text content flex items-center justify-center flex-col mt-4">
          <img
            src={img}
            alt="branch"
            className="w-[90%] h-40 rounded-md object-cover"
          />
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10 my-2">
            {branchName}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-2">
            {branchAddress}
          </p>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-2">
            {branchPhone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Branches;
