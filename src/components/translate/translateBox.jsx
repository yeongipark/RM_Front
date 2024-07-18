import React from "react";
import { textRender } from "../../utils/textRender.jsx";

const text =
  " fdaskfjajsdfk asjfl; kasjdfl;asd fl;asdjfl;sajdfl;asjd fklasdjfklsadjfklsadjflsdajfl kajfklsdafjklasdfjklasdjfklsdajfklja sdklfjsafjkasdlfjks fjdksj fksdjfksdjf ksdfj aslkfjlk asfjd alk;sfjl;a skdfj aslkdfj aslfdj asklfjsa dlkfjaskl fjaskl fjaslk dfjaslkdfj askl fjaslk fjaskl fjasdklf jsadlkfjslkfs";
const word = {
  asklfjsa: 1,
  dlkfjaskl: 2,
  fjaslk: 3,
};

export const TranslateBox = ({ title }) => {
  return (
    <div className="border-gray-200 border-solid border-2 w-3/4 h-110 shadow-lg rounded-md p-5">
      <h1 className="text-2xl font-bold mb-3">{title}</h1>
      <p>{textRender({ text, word })}</p>
    </div>
  );
};
