import React from "react";
import { Left } from "./left";
import { Right } from "./right";

export const Home = () => {
  return (
    <div className="flex justify-center mt-28 md:flex-row flex-col items-center md:items-start">
      <Left></Left>
      <Right></Right>
    </div>
  );
};
