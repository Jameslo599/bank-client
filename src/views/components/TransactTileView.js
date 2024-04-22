import React from "react";

function TransactTileView() {
  return (
    <div className="transact-tile">
      <div>
        <span>Recent Transactions</span>
        <button className="transact-button">View More</button>
      </div>
      <div>
        <p>You have no recent transactions.</p>
      </div>
    </div>
  );
}

export default TransactTileView;
