import React from "react";
import { Left } from "./left";
import { Right } from "./right";

export const Home = () => {
  return (
    <div className="flex justify-center mt-28">
      <Left></Left>
      <Right></Right>
    </div>
  );
};
