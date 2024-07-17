import React from "react";
import { IoIosCloseCircle } from "react-icons/io";

// 로그인한 사용자의 기록을 보여주는 컴포넌트
export const HistoryFrame = () => {
  return (
    <div className="flex gap-5 relative mb-4">
      <div className="bg-gray-300 w-14 h-14"></div>
      <div>
        {/* 파일이름 입력 */}
        <p className="mb-2">fileName.pdf</p>
        {/* 날짜 입력 */}
        <p className="text-sm text-gray-400">안녕하세요</p>
      </div>
      {/* 삭제 버튼 */}
      <div className="absolute right-3 top-3 hover:bg-slate-400 rounded-3xl cursor-pointer">
        <IoIosCloseCircle size={30} />
      </div>
    </div>
  );
};
