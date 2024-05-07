import React from "react";
import ArrowForward from "../../images/icons/arrow_forward_ios";

function TransactionItems({ name, date, reason, amount, balance, home }) {
  return (
    <>
      <div id={home} className="transaction-list">
        <div className="transaction-top">
          <div>
            <span>{date}</span>
            <span>{name}</span>
          </div>
          <ArrowForward />
        </div>
        <div className="transaction-bottom">
          <div>
            <span>For {reason}</span>
            <span>Balance</span>
          </div>
          <div>
            <span className="dollar-amount">{amount}</span>
            <span className="dollar-amount">{balance}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default TransactionItems;
