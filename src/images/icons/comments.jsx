import React from "react";

function Comments(props) {
  const fill = props.fill || "#004878";
  const secondaryfill = props.secondaryfill || fill;
  const strokewidth = props.strokewidth || 1;
  const width = props.width || "20px";
  const height = props.height || "100%";

  return (
    <svg
      className="chat-icon"
      height={height}
      width={width}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={secondaryfill}>
        <path d="M44,9h-3V27c0,2.761-2.239,5-5,5h-11.039l-7,5h7.739l11.748,7.832c.461,.305,1.081,.179,1.386-.282,.108-.163,.166-.354,.166-.55v-7h5c1.657,0,3-1.343,3-3V12c0-1.657-1.343-3-3-3Z" />
        <path
          d="M36,3H4c-1.657,0-3,1.343-3,3V27c0,1.657,1.343,3,3,3h5v9c0,.552,.448,1,1,1,.208,0,.412-.065,.581-.186l13.739-9.814h11.68c1.657,0,3-1.343,3-3V6c0-1.657-1.343-3-3-3Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Comments;
