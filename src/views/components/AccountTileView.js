import React from "react";
import { useNavigate } from "react-router-dom";

function AccountTileView({ balance, accNum }) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="account-tile">
        <div>
          <div className="account-main">
            <span>
              360 Checking <span>...{accNum.toString().slice(-4)}</span>
            </span>
            <div>
              <span>$</span>
              {balance}
              <span>00</span>
            </div>
            <span>AVAILABLE BALANCE</span>
          </div>
          <button className="account-button" onClick={() => navigate(`/bank`)}>
            View Account
          </button>
        </div>
        <div className="account-balance">
          <div>
            <div>
              <span>$</span>
              {balance}
              <span className="decimal">.</span>
              <span>00</span>
            </div>
            <span>CURRENT BALANCE</span>
          </div>
        </div>
      </div>
      <div className="account-skip">
        Skip the password -{" "}
        <span>
          access your account info with face or fingerprint id when you use the
          mobile app.
        </span>
      </div>
    </div>
  );
}

export default AccountTileView;
