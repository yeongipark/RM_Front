import { useState } from "react";

// input의 상태와 변경 함수를 가지는 커스텀 훅
export default function useInput(initValue) {
  const [value, setValue] = useState(initValue);

  const changeInput = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: changeInput,
  };
}
