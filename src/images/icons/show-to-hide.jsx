import React from "react";

function ShowToHide(props) {
  const text = props.text;
  const fill = props.fill || "#011728";
  const secondaryfill = props.secondaryfill || fill;
  const strokewidth = props.strokewidth || 4;
  const width = props.width || "100%";
  const height = props.height || "100%";
  const css = `.nc-int-show-to-hide{--transition-duration:0.4s}.nc-int-show-to-hide,.nc-int-show-to-hide *{transform-origin:50% 50%;transition:transform var(--transition-duration) cubic-bezier(.77,0,.18,1)}.nc-int-show-to-hide.nc-int-icon-state-b{transform:rotate(180deg)}.nc-int-show-to-hide.nc-int-icon-state-b :first-child{transform:rotate(90deg)}`;

  function handleClick(e) {
    let group = e.currentTarget.querySelector(".js-nc-int-icon");
    if (!group) return;
    group.classList.toggle("nc-int-icon-state-b");
    e.currentTarget.dispatchEvent(new Event("ncstatechanged"));
  }

  return (
    <button onClick={handleClick} name={props.name}>
      <svg
        className="expand"
        height={height}
        width={width}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          fill={secondaryfill}
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        >
          <g className="js-nc-int-icon nc-int-show-to-hide">
            <line fill="none" x1="16" x2="16" y1="3" y2="29" />
            <line fill="none" stroke={fill} x1="3" x2="29" y1="16" y2="16" />
          </g>
          <style>{css}</style>
        </g>
      </svg>
      {text}
    </button>
  );
}

export default ShowToHide;
