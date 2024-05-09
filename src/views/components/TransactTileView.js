import React, { useCallback, useEffect, useState } from "react";
import TransactionItems from "../components/TransactionItems";
import { format, parseISO } from "date-fns";
import { useNavigate } from "react-router-dom";

function TransactTileView() {
  const navigate = useNavigate();
  const [history, setHistory] = useState(null);
  const personalize = useCallback(async () => {
    try {
      const transaction = await fetch(
        `capital-one-server-production.up.railway.app/api/bank/history`,
        { credentials: "include" } // Include cookies in the request
      );
      const transactionHistory = await transaction.json();
      setHistory(transactionHistory.reverse().slice(0, 4));
    } catch (e) {
      console.log(e);
    }
  }, []);
  useEffect(() => {
    personalize();
  }, [personalize]);
  return (
    <div className="transact-tile">
      <div className="no-recent">
        <span>Recent Transactions</span>
        <button className="transact-button" onClick={() => navigate(`/bank`)}>
          View More
        </button>
      </div>

      <div className="transaction-history">
        {!history || !history.length ? (
          <div className="no-recent">
            <p>You have no recent transactions.</p>
          </div>
        ) : (
          history.map((e, i) => (
            <TransactionItems
              name={e.recipient}
              reason={e.reason}
              date={format(parseISO(e.date), "MMMM d',' y")}
              amount={e.amount}
              balance={e.balance}
              home="recent-log"
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TransactTileView;
