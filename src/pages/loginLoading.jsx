import React, { useEffect } from "react";
import { PacmanLoader } from "react-spinners";
import { apiCilent } from "../utils/axios";
import { useNavigate } from "react-router-dom";

export const LoginLoading = () => {
  const nav = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    const kakaoLogin = async () => {
      try {
        const res = await apiCilent.post("/login/kakao", { code: code });
        console.log(res);
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("login", true);
        // 로그인 완료되면 홈으로 이동
        nav("/");
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
