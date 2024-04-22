import React, { useState } from "react";

function CInfo(props) {
  const fill = props.fill || "currentColor";
  const secondaryfill = props.secondaryfill || fill;
  const width = props.width || "24px";
  const height = props.height || "100%";
  const [click, setClick] = useState(false);

  const handleHover = () => {
    click === false ? setClick(true) : setClick(false);
  };

  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <g fill={secondaryfill} stroke={secondaryfill} strokeWidth="1.1">
        <circle
          cx="8"
          cy="8"
          fill={click ? "#000" : "none"}
          r="7.5"
          stroke="fill"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="8"
          cy="4"
          r="1"
          stroke={click ? "#fff" : "none"}
          fill={click ? "#fff" : "#000"}
        />
        <line
          fill="none"
          stroke={click ? "#fff" : "#000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          x1="8"
          x2="8"
          y1="12.5"
          y2="7"
        />
      </g>
    </svg>
  );
}

export default CInfo;
