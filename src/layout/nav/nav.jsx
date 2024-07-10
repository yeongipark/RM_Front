import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { KAKAO_AUTH_URL } from "../../utils/Oauth";

export const Nav = () => {
  return (
    <div>
      <div className="bg-black text-white p-6 flex ">
        <p className="font-black text-xl">Readability Me!</p>
        <div className="grow"></div>
        <ul className="flex justify-center gap-20">
          <li className="font-black">HOME</li>
          <li className="font-black">HISTORY</li>
          <li className="font-black"> ABOUT</li>
        </ul>
        <div className="grow"></div>
        <a href={KAKAO_AUTH_URL}>
          <p className="font-black w-32 text-center">Login</p>
        </a>
      </div>
      <Outlet />
    </div>
  );
};
