import React from "react";
import { HistoryFrame } from "./historyFrame";

export const Right = () => {
  return (
    <div className="w-1/3 rounded-md bg-neutral-100 p-5 h-72">
      <h2 className="font-bold text-xl mb-2">Recent Translations</h2>
      {!localStorage.getItem("login") ? (
        <>
          <HistoryFrame />
          <HistoryFrame />
          <HistoryFrame />
        </>
      ) : (
        <p className="text-gray-500 text-sm">
          If you want to see your records, please login
        </p>
      )}
    </div>
  );
};
