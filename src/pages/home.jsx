import React from "react";
import { Left } from "../components/home/left";
import { Right } from "../components/home/right";

// home 화면을 구성하는 메인 페이지
export const Home = () => {
  return (
    <div className="flex justify-center mt-28 md:flex-row flex-col items-center md:items-start">
      <Left></Left>
      <Right></Right>
    </div>
  );
};
