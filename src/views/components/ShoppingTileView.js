import React from "react";
import macy from "../../images/macys_legacy.webp";
import priceline from "../../images/priceline.webp";
import adidas from "../../images/adidas.webp";

function ShoppingTileView() {
  return (
    <div className="shop-tile">
      <div>
        <h4>Credits for Shopping</h4>
        <div className="shop-main">
          <div>
            <div>
              <img src={macy} alt="macy's"></img>
            </div>
            <span>Up to 4% back</span>
            <span>Get Savings</span>
          </div>
          <div>
            <div>
              <img src={priceline} alt="priceline"></img>
            </div>
            <span>Up to 6% back</span>
            <span>Get Savings</span>
          </div>
          <div>
            <div>
              <img src={adidas} alt="adidas"></img>
            </div>
            <span>8% back</span>
            <span>Get Savings</span>
          </div>
        </div>
      </div>
      <div className="shop-button">
        <button>View All Offers</button>
      </div>
    </div>
  );
}

export default ShoppingTileView;
