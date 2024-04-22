import React from "react";

function ArrowLeft(props) {
  const fill = props.fill || "currentColor";
  const secondaryfill = props.secondaryfill || fill;
  const strokewidth = props.strokewidth || 1.35;
  const width = props.width || "20px";
  const height = props.height || "100%";

  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={secondaryfill} stroke={secondaryfill} strokeWidth={strokewidth}>
        <line
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          x1="0.5"
          x2="11.5"
          y1="6"
          y2="6"
        />
        <polyline
          fill="none"
          points="4.5 10 0.5 6 4.5 2"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export default ArrowLeft;
