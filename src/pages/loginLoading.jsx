import React, { useEffect } from "react";
import { PacmanLoader } from "react-spinners";
import { apiCilent } from "../utils/axios";

export const LoginLoading = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code);

  useEffect(() => {
    const kakaoLogin = async () => {
      try {
        const res = await apiCilent.post("/login/kakao", { code: code });
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    };
    if (code) {
      kakaoLogin();
    }
  }, [code]);

  return (
    <div className="flex justify-center flex-col items-center min-h-screen">
      <p className="mb-5 text-xl font-semibold">
        로그인 진행중입니다. 잠시만 기다려주세요
      </p>
      <PacmanLoader />
    </div>
  );
};
