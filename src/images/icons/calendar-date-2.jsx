import React from "react";

function CalendarDate2(props) {
  const fill = props.fill || "#0D74AF";
  const secondaryfill = props.secondaryfill || fill;
  const strokewidth = props.strokewidth || 1;
  const width = props.width || "24px";
  const height = props.height || "100%";

  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={secondaryfill}>
        <rect height="8" width="8" rx="1" ry="1" x="10" y="32" />
        <rect height="8" width="8" rx="1" ry="1" x="10" y="22" />
        <rect height="8" width="8" rx="1" ry="1" x="20" y="32" />
        <rect height="8" width="8" rx="1" ry="1" x="20" y="22" />
        <rect height="8" width="8" rx="1" ry="1" x="30" y="22" />
        <path d="M13,10c-.552,0-1-.448-1-1V2c0-.552,.448-1,1-1s1,.448,1,1v7c0,.552-.448,1-1,1Z" />
        <path d="M35,10c-.552,0-1-.448-1-1V2c0-.552,.448-1,1-1s1,.448,1,1v7c0,.552-.448,1-1,1Z" />
        <path
          d="M41,5h-3v4c0,1.657-1.343,3-3,3s-3-1.343-3-3V5H16v4c0,1.657-1.343,3-3,3s-3-1.343-3-3V5h-3c-2.76,.003-4.997,2.24-5,5v31c.003,2.76,2.24,4.997,5,5H41c2.76-.003,4.997-2.24,5-5V10c-.003-2.76-2.24-4.997-5-5Zm3,36c0,1.657-1.343,3-3,3H7c-1.657,0-3-1.343-3-3V18H44v23Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CalendarDate2;
