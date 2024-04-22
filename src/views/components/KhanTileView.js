import React from "react";
import khan from "../../images/money-swirl.avif";

function KhanTileView() {
  return (
    <div className="khan-tile">
      <div>
        <h4>Finances 101</h4>
        <div className="khan-main">
          <div>
            <img src={khan} alt="money swirl"></img>
          </div>
          <div>
            <p>
              We've partnered with Khan Academy to offer a free, self-paced
              financial literacy course.
            </p>
          </div>
        </div>
      </div>
      <div className="khan-buttons">
        <button>Not now</button>
        <button>Get tips</button>
      </div>
    </div>
  );
}

export default KhanTileView;
