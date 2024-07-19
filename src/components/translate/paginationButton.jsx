import React from "react";

export const PaginationButton = ({ num, pageNum, changePageNum }) => {
  return (
    <div
      onClick={() => {
        changePageNum(num);
      }}
      className={` rounded-md ${
        num == pageNum
          ? "bg-black hover:bg-gray-950 hover:text-white"
          : "bg-zinc-600"
      } hover:bg-zinc-400 hover:text-black text-white p-1 cursor-pointer `}
    >
      {num}
    </div>
  );
};
