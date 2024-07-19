import React from "react";
import { TextRender } from "../../utils/textRender.jsx";
import { Pagination } from "./pagination.jsx";

const text =
  " fdaskfjajsdfk asjfl; kasjdfl;asd fl;asdjfl;sajdfl;asjd fklasdjfklsadjfklsadjflsdajfl kajfklsdafjklasdfjklasdjfklsdajfklja sdklfjsafjkasdlfjks fjdksj fksdjfksdjf ksdfj aslkfjlk asfjd alk;sfjl;a skdfj aslkdfj aslfdj asklfjsa dlkfjaskl fjaskl fjaslk dfjaslkdfj askl fjaslk fjaskl fjasdklf jsadlkfjslkfs dksfjasldkfjdaslkfjasdlfjklsadjfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaksdfjalskdj faklsjf akslfjd kslfjasldfjaskldfjask dlfjkals;fjaslfjklsadjflsadfjkasl fjlkasfjskalj fkasfjaskl fjsalk fjsakl fjaslk fjaslkf jsaklfj asljlaks jfklsa fjlska fjlkas fjlksaj falksjf klasjf klasfj klasfj alsf jasl;fj as;lf jalskfjsalkfjskal jfslak jfsak fjaslkfj asklfj saklf jsalkj faskljf klasjf lksajf skaj flaskj flkasjf klasj flksajdklasj kflasj flkasjlfjas;l fjaslkf jasklfjaslkjfal;k jslfdj asklfjsa dlkfjaskl fjaskl fjaslk dfjaslkdfj askl fjaslk fjaskl fjasdklf jsadlkfjslkfs dksfjasldkfjdaslkfjasdlfjklsadjfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaksdfjalskdj faklsjf akslfjd kslfjasldfjaskldfjask dlfjkals;fjaslfjklsadjflsadfjkasl fjlkasfjskalj fkasfjaskl fjsalk fjsakl fjaslk fjaslkf jsaklfj asljlaks jfklsa fjlska fjlkas fjlksaj falksjf klasjf klasfj klasfj alsf jasl;fj as;lf jalskfjsalkfjskal jfslak jfsak fjaslkfj asklfj saklf jsalkj faskljf klasjf lksajf skaj flaskj flkasjf klasj flksajdklasj kflasj flkasjlfjas;l fjaslkf jasklfjaslkjfal;k jslfdj asklfjsa dlkfjaskl fjaskl fjaslk dfjaslkdfj askl fjaslk fjaskl fjasdklf jsadlkfjslkfs dksfjasldkfjdaslkfjasdlfjklsadjfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaksdfjalskdj faklsjf akslfjd kslfjasldfjaskldfjask dlfjkals;fjaslfjklsadjflsadfjkasl fjlkasfjskalj fkasfjaskl fjsalk fjsakl fjaslk fjaslkf jsaklfj asljlaks jfklsa fjlska fjlkas fjlksaj falksjf klasjf klasfj klasfj alsf jasl;fj as;lf jalskfjsalkfjskal jfslak jfsak fjaslkfj asklfj saklf jsalkj faskljf klasjf lksajf skaj flaskj flkasjf klasj flksajdklasj kflasj flkasjlfjas;l fjaslkf jasklfjaslkjfal;k j";
const word = {
  asklfjsa: 1,
  dlkfjaskl: 2,
  fjaslk: 3,
};

export const TranslateBox = ({ title }) => {
  return (
    <div className="md:w-1/2 w-full">
      <div className="border-gray-200 border-solid border-2  h-110 shadow-lg rounded-md p-5 overflow-auto pb-0 mb-1">
        <h1 className="text-2xl font-bold mb-3">{title}</h1>
        <TextRender text={text} word={word}></TextRender>
      </div>
      <Pagination />
    </div>
  );
};
