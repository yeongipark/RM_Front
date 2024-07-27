import React from "react";

export const TranslateLeftSkeletion = ({ title }) => {
  return (
    <div className="md:w-1/2 w-full">
      <div className="border-gray-200 border-solid border-2  h-110 shadow-lg rounded-md p-5 overflow-auto pb-0 mb-1">
        <h1 className="text-2xl font-bold mb-3">{title}</h1>
        <div
          className="h-0.9 rounded-md animate-shimmer bg-gradient-to-r from-gray-300 to-gray-200"
          style={{ backgroundSize: "200% 100%" }}
        ></div>
      </div>
    </div>
  );
};
