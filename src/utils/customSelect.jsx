import React, { useEffect, useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { IoIosArrowDown } from "react-icons/io";

// 커스텀한 selecet
export const CustomSelect = ({
  setFileType,
  fileType,
  width,
  name,
  selectMenu,
}) => {
  // 모달창 ref 변수
  const modalRef = useRef(null);

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
    console.log(modalRef.current, e.target);
    if (!modalRef.current.contains(e.target)) {
      setOn(false);
      e.stopPropagation();
    }
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
    <div ref={modalRef}>
      <div
        className={`${width} border-solid border-gray-300 border-2 p-1 rounded-md  relative hover:border-black mb-1`}
        onClick={onClick}
      >
        <p className="text-gray-500">
          <span> {fileType ?? name} </span>
          <IoIosArrowDown className="absolute right-3 top-2" />
        </p>
      </div>

      <CSSTransition in={on} classNames="fade" timeout={300} unmountOnExit>
        <ul
          className={`absolute w-1/6 rounded-md bg-white border-solid border-gray-300 border-2`}
        >
          {selectMenu.map((item) => {
            return (
              <li
                className="hover:bg-slate-300 cursor-pointer text-lg text-center"
                onClick={changeFileType}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </CSSTransition>
    </div>
  );
};
