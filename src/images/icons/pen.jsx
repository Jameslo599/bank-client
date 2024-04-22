import React from "react";

function Pen(props) {
  const fill = props.fill || "#0070a8";
  const secondaryfill = props.secondaryfill || fill;
  const width = props.width || "20px";
  const height = props.height || "100%";

  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={secondaryfill} stroke={secondaryfill} strokeWidth="1">
        <line
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          x1="8"
          x2="10"
          y1="2"
          y2="4"
        />
        <path
          d="M4,10l7.08-7.05A1.435,1.435,0,1,0,9.05.92L2,8,.5,11.5Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export default Pen;
