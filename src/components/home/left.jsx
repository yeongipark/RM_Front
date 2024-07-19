import React, { useState, useRef } from "react";
import { CustomSelect } from "../../utils/customSelect";
import "../../styles/textarea.css";
import { CustomFileInput } from "../../utils/customFileInput";
import { CSSTransition } from "react-transition-group";
import useInput from "../hooks/useInput";

const selectMenu = ["text", "audio", "image", "file"];

// home화면에서 왼쪽 파일 타입과 파일을 선택하는 컴포넌트
export const Left = () => {
  // 파일 타입 설정 변수 (기본 = text )
  const [fileType, setFileType] = useState("text");

  // textarea에 입력 값을 저장할 변수
  const textareaInput = useInput("");

  // 파일 저장 변수
  const [file, setFile] = useState(undefined);

  // 변역 버튼 눌렀을 때
  const onSubmit = () => {
    if (fileType === "text") {
      // 서버로 텍스트 보내기
    } else {
      const formData = new FormData();
      formData.append("file", file);
      // 서버로 요청 보내기
    }
  };

  // textarea에 사용할 ref 생성
  const nodeRef = useRef(null);

  return (
    <div className="md:w-1/3 w-2/3 md:mb-0 mb-5">
      <h2 className="font-bold text-3xl mb-5">Translate & Share</h2>
      <p className="mb-5 text-base">
        Easily translate and share files with our powerful app.
      </p>
      {/* 파일 타입 설정 */}
      <p className="text-lg">File Type</p>
      <CustomSelect
        fileType={fileType}
        setFileType={setFileType}
        width={"w-11/12"}
        name={"Select File Type"}
        selectMenu={selectMenu}
      />

      {/* 파일 타입이 text일때 textarea등장에 애니메이션 달기 */}
      <CSSTransition
        in={fileType === "text"}
        timeout={300}
        classNames="textarea"
        unmountOnExit
        ref={nodeRef}
      >
        <textarea
          ref={nodeRef}
          className=" w-11/12 border-solid border-gray-300 border-2 p-1 rounded-md resize-none h-80"
          {...textareaInput}
        ></textarea>
      </CSSTransition>
      {/* 파일 타입이 text아닌 경우에 file을 입력받는 창 띄우기 */}
      {fileType !== "text" && (
        <>
          <p className="text-lg">Upload File</p>
          <CustomFileInput type={fileType} setFile={setFile}></CustomFileInput>
        </>
      )}

      {/* 변역 버튼 */}
      <div className="w-11/12 bg-black text-white p-1 text-center rounded-md cursor-pointer active:bg-gray-600 hover:bg-gray-800">
        Translate & Share
      </div>
    </div>
  );
};
