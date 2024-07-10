import React from "react";
import { KAKAO_AUTH_URL } from "../utils/Oauth";
import kakaoLoginImage from "../assets/kakao_login.png";

export const Login = () => {
  return (
    <div className="flex justify-center mt-40">
      <a href={KAKAO_AUTH_URL}>
        <img src={kakaoLoginImage} />
      </a>
    </div>
  );
};
