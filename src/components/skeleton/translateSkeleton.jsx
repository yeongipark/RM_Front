import React, { useState } from "react";
import { CustomSelect } from "../../utils/customSelect";

const selectMenu = ["Level 1", "Level 2", "Level 3"];

export const TranslateSkeleton = () => {
  const [level, setLevel] = useState(null);
  return (
    <div className='pt-3 pl-24 pr-24 h-auto"'>
      <p className="text-lg font-bold ">Select Translate Level</p>
      <div
        className="w-60 shadow-lg border-gray-200 border-solid border-2 h-10 rounded-md animate-shimmer bg-gradient-to-r from-slate-400 to-slate-700"
        style={{ backgroundSize: "200% 100%" }}
      ></div>
      <div className="flex gap-10 mt-5 sm:flex-row flex-col">
        <div className="md:w-1/2 w-full">
          <div
            className="border-gray-200 border-solid border-2  h-110 shadow-lg rounded-md p-5 overflow-auto pb-0 mb-1 animate-shimmer bg-gradient-to-r from-slate-400 to-slate-700"
            style={{ backgroundSize: "200% 100%" }}
          ></div>
        </div>
        <div className="md:w-1/2 w-full">
          <div
            className="border-gray-200 border-solid border-2  h-110 shadow-lg rounded-md p-5 overflow-auto pb-0 mb-1 animate-shimmer bg-gradient-to-r from-slate-400 to-slate-700"
            style={{ backgroundSize: "200% 100%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};
