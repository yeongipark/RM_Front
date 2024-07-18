import React, { useState } from "react";

export function TextRender({ text, word }) {
  const [hoveredWord, setHoveredWord] = useState(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  const handleMouseOver = (item, event) => {
    console.log("ff");
    setHoveredWord(item);
    setHoverPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseOut = () => {
    setHoveredWord(null);
  };

  const parts = text?.split(/(\s+)/);

  return (
    <div>
      {parts?.map((item, idx) => {
        if (item in word) {
          switch (word[item]) {
            case 1:
              return (
                <span
                  key={idx}
                  className="bg-lime-500 text-lime-300 p-1 rounded-md"
                  onMouseOver={(e) => handleMouseOver(item, e)}
                  onMouseOut={handleMouseOut}
                >
                  {item}
                </span>
              );
            case 2:
              return (
                <span
                  key={idx}
                  className="bg-blue-500 text-blue-300 p-1 rounded-md"
                  onMouseOver={(e) => handleMouseOver(item, e)}
                  onMouseOut={handleMouseOut}
                >
                  {item}
                </span>
              );
            case 3:
              return (
                <span
                  key={idx}
                  className="bg-red-500 text-red-300 rounded-md p-1 hover:bg-red-700"
                  onMouseOver={(e) => handleMouseOver(item, e)}
                  onMouseOut={handleMouseOut}
                >
                  {item}
                </span>
              );
            default:
              break;
          }
        } else {
          return item;
        }
      })}
      {hoveredWord && (
        <div
          style={{
            position: "absolute",
            top: hoverPosition.y - 40,
            left: hoverPosition.x,
            backgroundColor: "grey",
            border: "1px solid gray",
            padding: "5px",
            zIndex: 1000,
            borderRadius: "10px",
            boxShadow: "5px 5px 5px grey",
          }}
        >
          {/* {descriptions[hoveredWord]} */}
          안녕하세요
        </div>
      )}
    </div>
  );
}
