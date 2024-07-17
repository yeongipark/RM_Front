import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { KAKAO_AUTH_URL } from "../../utils/Oauth";
import { apiClient } from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";

export const Nav = () => {
  const cookie = new Cookies();
  const nav = useNavigate();
  const isLogin = localStorage.getItem("login");
  // 로그아웃 실행 함수
  const logout = () => {
    localStorage.clear();
    nav("/");
  };

  const getAll = async () => {
    const refreshToken = cookie.get("refresh-token");
    console.log(refreshToken);
    const res = await apiClient.get("/test");
    console.log(res);
  };

  return (
    <div>
      <div className="bg-black text-white p-6 flex sm:flex-row flex-col items-center ">
        <p className="font-black text-xl sm:mb-0 mb-5 cursor-pointer">
          Readability Me!
        </p>
        <div className="grow"></div>
        <ul className="flex justify-center sm:gap-20 sm:flex-row flex-col gap-5 sm:mb-0 mb-5">
          <li
            className="font-black cursor-pointer hover:scale-125 text-center"
            onClick={getAll}
          >
            HOME
          </li>
          <li className="font-black cursor-pointer hover:scale-125 text-center">
            HISTORY
          </li>
          <li className="font-black hover:scale-125 cursor-pointer text-center">
            {" "}
            ABOUT
          </li>
        </ul>
        <div className="grow"></div>
        {isLogin ? (
          <p
            className="font-black w-32 text-center cursor-pointer hover:scale-125"
            onClick={logout}
          >
            Logout
          </p>
        ) : (
          <a href={KAKAO_AUTH_URL}>
            <p className="font-black w-32 text-center hover:scale-125">Login</p>
          </a>
        )}
      </div>
      <Outlet />
    </div>
  );
};
