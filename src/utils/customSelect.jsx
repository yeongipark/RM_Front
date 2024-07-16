import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export const CustomSelect = ({ setFileType, fileType }) => {
  const [on, setOn] = useState(false);
  // 파일 인풋창 눌렀을 때
  const onClick = () => {
    setOn(!on);
  };

  const changeFileType = (e) => {
    setFileType(e.target.innerHTML);
    setOn(false);
  };

  //
  return (
    <div>
      <div
        className="w-11/12 border-solid border-gray-300 border-2 p-1 rounded-md  relative hover:border-black mb-1"
        onClick={onClick}
      >
        <p className="text-gray-500">
          <span> {fileType ?? "Select File Type"} </span>
          <IoIosArrowDown className="absolute right-3 top-2" />
        </p>
      </div>
      {on ? (
        <ul
          className={`absolute w-1/4 rounded-md bg-white border-solid border-gray-300 border-2 transition transform duration-500 ease-in-out ${
            on ? "scale-100 opacity-100" : "scale-100 opacity-0"
          }`}
        >
          <li
            className="hover:bg-slate-300 cursor-pointer text-lg text-center"
            onClick={changeFileType}
          >
            text
          </li>
          <li
            className="hover:bg-slate-300 cursor-pointer text-lg text-center"
            onClick={changeFileType}
          >
            audio
          </li>
          <li
            className="hover:bg-slate-300 cursor-pointer text-lg text-center"
            onClick={changeFileType}
          >
            image
          </li>
          <li
            className="hover:bg-slate-300 cursor-pointer text-lg text-center"
            onClick={changeFileType}
          >
            file
          </li>
        </ul>
      ) : null}
    </div>
  );
};
