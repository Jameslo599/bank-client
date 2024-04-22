import React from "react";

function BankStatement(props) {
  const fill = props.fill || "#0D74AF";
  const secondaryfill = props.secondaryfill || fill;
  const strokewidth = props.strokewidth || 1;
  const width = props.width || "24px";
  const height = props.height || "100%";

  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill={secondaryfill}
        stroke={secondaryfill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokewidth}
      >
        <polygon fill="none" points="3 23 3 1 21 1 21 23 3 23" stroke={fill} />
        <polygon fill="none" points="12 4 7 7 7 8 17 8 17 7 12 4" />
        <line fill="none" x1="8" x2="8" y1="12" y2="8" />
        <line fill="none" x1="12" x2="12" y1="12" y2="8" />
        <line fill="none" x1="16" x2="16" y1="12" y2="8" />
        <line fill="none" x1="7" x2="17" y1="15" y2="15" />
        <line fill="none" x1="7" x2="12" y1="19" y2="19" />
      </g>
    </svg>
  );
}

export default BankStatement;
