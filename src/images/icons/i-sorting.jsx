import React, { useEffect, useState } from "react";
import avatar from "../avatar.svg";

function ISorting(props) {
  const fill = props.fill || "currentColor";
  const secondaryfill = props.secondaryfill || fill;
  const strokewidth = props.strokewidth || 3;
  const width = props.width || "24px";
  const height = props.height || "100%";
  const css = `.nc-int-sorting{--transition-duration:0.3s}.nc-int-sorting *{transform-origin:16px 22px;transition:transform var(--transition-duration) cubic-bezier(.86,0,.07,1)}.nc-int-sorting.nc-int-icon-state-b :nth-child(1){transform:translateY(-12px) rotate(-90deg)}.nc-int-sorting.nc-int-icon-state-b :nth-child(2){transform:translateY(-12px) rotate(90deg)}`;

  function handleClick(e) {
    let group = e.currentTarget.querySelector(".js-nc-int-icon");
    if (!group) return;
    group.classList.toggle("nc-int-icon-state-b");
    e.currentTarget.dispatchEvent(new Event("ncstatechanged"));
  }

  const [backendData, setBackendData] = useState(null);

  useEffect(() => {
    const personalize = async () => {
      try {
        const response = await fetch(
          `https://server.resilientcoda.com/api/user`
        );
        const data = await response.json();
        setBackendData(data);
      } catch (e) {
        console.log(e);
      }
    };

    personalize();
  }, []);

  return (
    <button className="avatar" onClick={handleClick}>
      <img
        alt="account avatar"
        src={backendData?.cloudinary_id ? backendData.cloudinary_id : avatar}
      ></img>
      <svg
        className="arrow"
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
          <g className="js-nc-int-icon nc-int-sorting">
            <line
              fill="none"
              stroke={fill}
              strokeLinecap="square"
              x1="16"
              x2="5"
              y1="22"
              y2="11"
            />
            <line
              fill="none"
              strokeLinecap="square"
              x1="27"
              x2="16"
              y1="11"
              y2="22"
            />
          </g>
          <style>{css}</style>
        </g>
      </svg>
    </button>
  );
}

export default ISorting;
