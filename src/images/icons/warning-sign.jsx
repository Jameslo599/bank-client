import React from "react";

function WarningSign(props) {
  const fill = props.fill || "currentColor";
  const secondaryfill = props.secondaryfill || fill;
  const width = props.width || "20px";
  const height = props.height || "100%";

  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={secondaryfill}>
        <path
          d="M31.633,26.522,18.683,2.6a3.053,3.053,0,0,0-5.366,0L.367,26.522A3,3,0,0,0,.43,29.514,3.024,3.024,0,0,0,3.05,31h25.9a3.038,3.038,0,0,0,2.683-4.478ZM17.848,11l-.714,10h-2L14.42,11ZM16.134,27a1.778,1.778,0,1,1,1.778-1.778A1.778,1.778,0,0,1,16.134,27Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default WarningSign;
