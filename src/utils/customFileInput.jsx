import React, { useEffect, useState } from "react";

// 커스텀한 파일 인풋창 컴포넌트
export const CustomFileInput = ({ type, setFile }) => {
  const [fileName, setFileName] = useState(undefined);

  useEffect(() => {
    setFileName(undefined);
  }, [type]);

  const fileChange = (e) => {
    setFileName(e.target.files[0].name);
    setFile(e.target.files[0]);
  };

  const typeName = type;

  switch (type) {
    case "audio":
      type = ".mp3";
      break;
    case "image":
      type = ".png";
      break;
    case "file":
      type = ".pdf";
      break;
    default:
      break;
  }
  return (
    <div>
      <div className="w-11/12 border-solid border-gray-300 border-2 p-1 rounded-md  hover:border-black mb-5">
        <label htmlFor="file" className="cursor-pointer text-gray-500">
          {fileName ?? `Select ${typeName} File`}
        </label>
        <input
          hidden
          type="file"
          id="file"
          accept={type}
          onChange={fileChange}
        />
      </div>
    </div>
  );
};
