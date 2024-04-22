import React from "react";

function ERemove(props) {
  const fill = props.fill || "#0c74af";
  const secondaryfill = props.secondaryfill || fill;
  const strokewidth = props.strokewidth || 2;
  const width = props.width || "20px";
  const height = props.height || "100%";

  return (
    <svg
      className="e-remove"
      height={height}
      width={width}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={secondaryfill} stroke={secondaryfill} strokeWidth={strokewidth}>
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          x1="13.5"
          x2="2.5"
          y1="2.5"
          y2="13.5"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          x1="2.5"
          x2="13.5"
          y1="2.5"
          y2="13.5"
        />
      </g>
    </svg>
  );
}

export default ERemove;
