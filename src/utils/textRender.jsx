// 번역 텍스트 색깔 나타내기
export function textRender({ text, word }) {
  const parts = text?.split(/(\s+)/);

  return parts?.map((item, idx) => {
    if (item in word) {
      switch (word[item]) {
        case 1:
          return (
            <span className="bg-lime-500 text-lime-300 p-1 rounded-md">
              {item}
            </span>
          );
        case 2:
          return (
            <span className="bg-blue-500 text-blue-300 p-1 rounded-md">
              {item}
            </span>
          );
        case 3:
          return (
            <span className="bg-red-500 text-red-300 rounded-md p-1">item</span>
          );
        default:
          break;
      }
    } else {
      return item;
    }
  });
}
