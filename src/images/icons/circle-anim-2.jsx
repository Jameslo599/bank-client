import React from "react";

function CircleAnim2(props) {
  const fill = props.fill || "#004977";
  const secondaryfill = props.secondaryfill || "#d03027";
  const strokewidth = props.strokewidth || 1;
  const width = props.width || "100%";
  const height = props.height || "100%";
  const css = `.nc-loop-circle-2-64-icon-o{--animation-duration:0.65s;transform-origin:32px 32px;animation:nc-loop-circle-2-anim var(--animation-duration) infinite cubic-bezier(.645,.045,.355,1)}@keyframes nc-loop-circle-2-anim{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}`;

  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill={secondaryfill}
        stroke={secondaryfill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokewidth}
      >
        <g className="nc-loop-circle-2-64-icon-o">
          <circle
            cx="32"
            cy="32"
            fill="none"
            opacity=".4"
            r="29"
            stroke={fill}
          />
          <path d="M32 3a29 29 0 0 1 29 29" fill="none" />
        </g>
        <style>{css}</style>
      </g>
    </svg>
  );
}

export default CircleAnim2;
