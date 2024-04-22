import React from "react";

function SelectState({ handleChange, name, value }, props) {
  const fill = props.fill || "currentColor";
  const secondaryfill = props.secondaryfill || fill;
  const strokewidth = props.strokewidth || 3;
  const width = props.width || "16px";
  const height = props.height || "100%";
  const css = `.nc-int-sorting{--transition-duration:0.1s}.nc-int-sorting *{transform-origin:16px 22px;transition:transform var(--transition-duration) cubic-bezier(.86,0,.07,1)}.nc-int-sorting.nc-int-icon-state-b :nth-child(1){transform:translateY(-12px) rotate(-90deg)}.nc-int-sorting.nc-int-icon-state-b :nth-child(2){transform:translateY(-12px) rotate(90deg)}`;

  function handleClick(e) {
    let group = e.currentTarget.querySelector(".js-nc-int-icon");
    if (!group) return;
    group.classList.toggle("nc-int-icon-state-b");
    e.currentTarget.dispatchEvent(new Event("ncstatechanged"));
  }

  return (
    <div className="us-state" onClick={handleClick}>
      <select name={name} onChange={handleChange} value={value} required>
        <option value="" disabled selected>
          --
        </option>
        <option value="AL">AL</option>
        <option value="AK">AK</option>
        <option value="AR">AR</option>
        <option value="AZ">AZ</option>
        <option value="CA">CA</option>
        <option value="CO">CO</option>
        <option value="CT">CT</option>
        <option value="DC">DC</option>
        <option value="DE">DE</option>
        <option value="FL">FL</option>
        <option value="GA">GA</option>
        <option value="HI">HI</option>
        <option value="IA">IA</option>
        <option value="ID">ID</option>
        <option value="IL">IL</option>
        <option value="IN">IN</option>
        <option value="KS">KS</option>
        <option value="KY">KY</option>
        <option value="LA">LA</option>
        <option value="MA">MA</option>
        <option value="MD">MD</option>
        <option value="ME">ME</option>
        <option value="MI">MI</option>
        <option value="MN">MN</option>
        <option value="MO">MO</option>
        <option value="MS">MS</option>
        <option value="MT">MT</option>
        <option value="NC">NC</option>
        <option value="NE">NE</option>
        <option value="NH">NH</option>
        <option value="NJ">NJ</option>
        <option value="NM">NM</option>
        <option value="NV">NV</option>
        <option value="NY">NY</option>
        <option value="ND">ND</option>
        <option value="OH">OH</option>
        <option value="OK">OK</option>
        <option value="OR">OR</option>
        <option value="PA">PA</option>
        <option value="RI">RI</option>
        <option value="SC">SC</option>
        <option value="SD">SD</option>
        <option value="TN">TN</option>
        <option value="TX">TX</option>
        <option value="UT">UT</option>
        <option value="VT">VT</option>
        <option value="VA">VA</option>
        <option value="WA">WA</option>
        <option value="WI">WI</option>
        <option value="WV">WV</option>
        <option value="WY">WY</option>
      </select>
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
    </div>
  );
}

export default SelectState;
