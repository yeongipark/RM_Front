import React, { useEffect } from "react";
import { PacmanLoader } from "react-spinners";
import { apiClient } from "../utils/axios";
import { useNavigate } from "react-router-dom";

export const LoginLoading = ({ text }) => {
  const nav = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    const kakaoLogin = async () => {
      try {
        const res = await apiClient.post("/login/kakao", { code: code });
        localStorage.setItem("accessToken", res.headers["access-token"]);
        localStorage.setItem("login", true);
        console.log(res);
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
      <p className="mb-5 text-xl font-semibold">{text}</p>
      <PacmanLoader />
    </div>
  );
};
