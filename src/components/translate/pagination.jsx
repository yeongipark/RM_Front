import React, { useEffect, useState } from "react";
import { PaginationButton } from "./paginationButton";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const mock = {
  total: 10,
  pages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};

function slice(arr) {
  let sliceArr = [];
  for (let i = 0; i < arr.length; i += 10) {
    sliceArr.push(arr.slice(i, i + 10));
  }
  return sliceArr;
}

export const Pagination = () => {
  // 페이지네이션 페이지들 저장할 state
  const [sliceArr, setSliceArr] = useState([mock.pages]);

  // 현재 몇번째 페이지 인지 저장할 state
  const [pageNum, setPageNum] = useState(1);
  // 페이지네이션 1~10 >> 11~20 이거 표시하는거 바꾸는 state
  const [totalPage, setTotalPage] = useState(0);

  // 번호 클릭했을 때 페이지 번경하는 함수
  function changePageNum(num) {
    setPageNum(num);
  }

  // 이전 화살표 클릭했을 때 페이지 변경 함수
  function prevPage() {
    if (pageNum <= 1) {
      return;
    }
    setPageNum(pageNum - 1);
  }

  // 다음 화살표 클릭했을 때 페이지 변경 함수
  function nextPage() {
    if (pageNum >= mock.total) {
      return;
    }

    setPageNum(pageNum + 1);
  }

  // 페이지 번호 바뀔때 10의 자리가 변경되면 표시되는 총 페이지 변경 1~10 -> 11~20
  useEffect(() => {
    if (pageNum <= 10) {
      setTotalPage(0);
      return;
    }
    if (totalPage != String(pageNum).at(0)) {
      setTotalPage(String(pageNum).at(0));
    }
  }, [pageNum]);

  //   페이지 개수가 10개 이상이면 페이지 나누기
  useEffect(() => {
    if (mock.total > 10) {
      let sliced = slice(mock.pages);
      setSliceArr(sliced);
    }
  }, []);

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
