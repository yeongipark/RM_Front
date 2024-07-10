import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

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
        <Link to={"/login"}>
          <p className="font-black w-32 text-center">Login</p>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};
