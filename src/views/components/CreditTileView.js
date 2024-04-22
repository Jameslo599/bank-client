import React from "react";
import credit from "../../images/credit-score.png";

function CreditTileView() {
  return (
    <div className="credit-tile">
      <div>
        <h4>CreditWise</h4>
        <div className="credit-main">
          <img src={credit} alt="credit score"></img>

          <div>
            <p>See Your Score in Seconds</p>
            <span>Activate Now</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditTileView;
