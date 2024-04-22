import React from "react";

function CAdd(props) {
  const fill = props.fill || "#0D74AF";
  const secondaryfill = props.secondaryfill || fill;
  const strokewidth = props.strokewidth || 1;
  const width = props.width || "24px";
  const height = props.height || "100%";

  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={secondaryfill} stroke={secondaryfill} strokeWidth="0.75">
        <circle
          cx="6"
          cy="6"
          fill="none"
          r="5.5"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          x1="6"
          x2="6"
          y1="3"
          y2="9"
        />
        <line
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          x1="3"
          x2="9"
          y1="6"
          y2="6"
        />
      </g>
    </svg>
  );
}

export default CAdd;
