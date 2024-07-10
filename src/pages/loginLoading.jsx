import React from "react";
import { PacmanLoader } from "react-spinners";

export const LoginLoading = () => {
  return (
    <div className="flex justify-center flex-col items-center min-h-screen">
      <p className="mb-5 text-xl font-semibold">
        로그인 진행중입니다. 잠시만 기다려주세요
      </p>
      <PacmanLoader />
    </div>
  );
};
