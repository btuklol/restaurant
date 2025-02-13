import classNames from "classnames";
import { IoLocation } from "react-icons/io5";
import React from "react";
interface BranchesProps {
  id: number;
  branchName: string;
  branchLocation: string;
  branchAddress: string;
  branchPhone: string;
}

const Branches = ({
  branchAddress,
  branchLocation,
  branchName,
  branchPhone,
}: BranchesProps) => {
  return (
    <div className="max-w-xs w-full group/card rounded-lg">
      <div
        className={classNames(
          " cursor-pointer overflow-hidden relative card h-48 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          "bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover"
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
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {branchName}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {branchAddress}
          </p>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {branchPhone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Branches;
