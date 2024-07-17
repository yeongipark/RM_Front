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

  return (
    <div>
      <div className="bg-black text-white p-6 flex sm:flex-row flex-col items-center ">
        {/* 로고 */}
        <p className="font-black text-xl sm:mb-0 mb-5 cursor-pointer">
          Readability Me!
        </p>
        {/*  로고와 메뉴 사이 공백을 위한 div */}
        <div className="grow"></div>

        {/* 메뉴들 ul li 태그로 나타냄 */}
        <ul className="flex justify-center sm:gap-20 sm:flex-row flex-col gap-5 sm:mb-0 mb-5">
          <li
            className="font-black cursor-pointer hover:scale-125 text-center"
            onClick={() => nav("/")}
          >
            HOME
          </li>
          <li
            className="font-black cursor-pointer hover:scale-125 text-center"
            onClick={() => nav("/history")}
          >
            HISTORY
          </li>
          <li className="font-black hover:scale-125 cursor-pointer text-center">
            ABOUT
          </li>
        </ul>

        {/* 메뉴와 로그인 버튼 사이의 공백을 위한 div */}
        <div className="grow"></div>

        {/* 로그인한 사용자는 logout, 로그인 안한 사용자는 login이 보이도록 */}
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
      {/* Nested Route 의 자식들을 나타냄*/}
      <Outlet />
    </div>
  );
};
