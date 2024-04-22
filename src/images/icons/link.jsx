import React from "react";

function Link(props) {
  const fill = props.fill || "currentColor";
  const secondaryfill = props.secondaryfill || fill;
  const width = props.width || "14px";
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
          x1="3.5"
          x2="8.5"
          y1="8.5"
          y2="3.5"
        />
        <path
          d="M5,3,6.672,1.328a2.829,2.829,0,0,1,4,0h0a2.829,2.829,0,0,1,0,4L9,7"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3,5,1.328,6.672a2.829,2.829,0,0,0,0,4h0a2.829,2.829,0,0,0,4,0L7,9"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export default Link;
