import React, { useEffect, useState } from "react";
import { PaginationButton } from "./paginationButton";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import usePagination from "../hooks/usePagination";

const mock = {
  total: 12,
  pages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
};

export const Pagination = () => {
  const { sliceArr, pageNum, totalPage, changePageNum, prevPage, nextPage } =
    usePagination(mock.pages, mock.total);

  console.log(sliceArr, pageNum, totalPage);
  return (
    <div className="flex justify-center items-center gap-2">
      <button
        className="cursor-pointer rounded-md hover:bg-slate-500 active:bg-slate-700"
        onClick={prevPage}
      >
        <MdKeyboardDoubleArrowLeft />
      </button>
      {sliceArr[totalPage]?.map((item, idx) => {
        return (
          <PaginationButton
            num={item}
            pageNum={pageNum}
            changePageNum={changePageNum}
          />
        );
      })}

      <button
        onClick={nextPage}
        className="cursor-pointer rounded-md hover:bg-slate-500 active:bg-slate-700"
      >
        <MdKeyboardDoubleArrowRight />
      </button>
    </div>
  );
};
