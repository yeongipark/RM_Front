import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

// 커스텀한 selecet
export const CustomSelect = ({ setFileType, fileType }) => {
  const [on, setOn] = useState(false);
  // 파일 인풋창 눌렀을 때
  const onClick = () => {
    setOn(!on);
  };

  // 파일 타입을 변경했을 때 실행할 함수
  const changeFileType = (e) => {
    setFileType(e.target.innerHTML);
    setOn(false);
  };

  // 모달창 이외에 것을 클릭하면 닫히게
  const handleOutsideClick = (e) => {
    setOn(false);
  };

  useEffect(() => {
    if (on) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [on]);

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

      {/* 모달창 형식으로 구현 */}

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
