import React, { useState } from "react";
import { CustomSelect } from "../../utils/customSelect";
import "../../styles/left.css";
import "../../styles/textarea.css";
import { CustomFileInput } from "../../utils/customFileInput";
import { CSSTransition } from "react-transition-group";

export const Left = () => {
  // 파일 타입 설정 변수 (기본 = text )
  const [fileType, setFileType] = useState("text");

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

  return (
    <div className="w-1/3  0">
      <h2 className="font-bold text-3xl mb-5">Translate & Share</h2>
      <p className="mb-5 text-base">
        Easily translate and share files with our powerful app.
      </p>
      <p className="text-lg">File Type</p>
      <CustomSelect fileType={fileType} setFileType={setFileType} />

      <CSSTransition
        in={fileType === "text"}
        timeout={300}
        classNames="textarea"
        unmountOnExit
      >
        <textarea className=" w-11/12 border-solid border-gray-300 border-2 p-1 rounded-md resize-none h-80"></textarea>
      </CSSTransition>

      {fileType !== "text" && (
        <>
          <p className="text-lg">Upload File</p>
          <CustomFileInput type={fileType} setFile={setFile}></CustomFileInput>
        </>
      )}

      <div className="w-11/12 bg-black text-white p-1 text-center rounded-md cursor-pointer active:bg-gray-600 hover:bg-gray-800">
        Translate & Share
      </div>
    </div>
  );
};
