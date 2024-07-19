import { useState, useEffect } from "react";

function slice(arr, pageSize) {
  let sliceArr = [];
  for (let i = 0; i < arr.length; i += pageSize) {
    sliceArr.push(arr.slice(i, i + pageSize));
  }
  return sliceArr;
}

export default function usePagination(pages, total, pageSize = 10) {
  // 페이지네이션 페이지들 저장할 state
  const [sliceArr, setSliceArr] = useState([pages]);
  // 현재 몇번째 페이지 인지 저장할 state
  const [pageNum, setPageNum] = useState(1);
  // 페이지네이션 1~10 >> 11~20 이거 표시하는거 바꾸는 state
  const [totalPage, setTotalPage] = useState(0);

  // 번호 클릭했을 때 페이지 번호로 바뀌도록 하는 함수
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
    if (pageNum >= total) {
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
    if (totalPage != Math.floor((pageNum - 1) / pageSize)) {
      setTotalPage(Math.floor((pageNum - 1) / pageSize));
    }
  }, [pageNum]);

  //   페이지 개수가 10개 이상이면 페이지 나누기
  useEffect(() => {
    if (total > pageSize) {
      let sliced = slice(pages, pageSize);
      setSliceArr(sliced);
    }
  }, []);

  return {
    sliceArr,
    pageNum,
    totalPage,
    changePageNum,
    prevPage,
    nextPage,
  };
}
