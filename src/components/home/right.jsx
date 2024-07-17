import React from "react";
import { HistoryFrame } from "./historyFrame";

// 홈 화면 오른쪽 로그인한 사용자의 기록을 나타내는 컴포넌트
export const Right = () => {
  return (
    <div className="md:w-1/3 w-2/3 rounded-md bg-neutral-100 p-5 h-72">
      <h2 className="font-bold text-xl mb-2">Recent Translations</h2>
      {/* 로그인한 사용자는 이때까지 사용한 기록을, 로그인 안한 사용자는 로그인 해야된다는 문구 출력 */}
      {!localStorage.getItem("login") ? (
        <>
          <HistoryFrame />
          <HistoryFrame />
          <HistoryFrame />
        </>
      ) : (
        <p className="text-gray-500 text-sm">
          If you want to see your records, please login
        </p>
      )}
    </div>
  );
};
