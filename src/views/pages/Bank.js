import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyHeaderView from "../components/MyHeaderView";
import MyFooterView from "../components/MyFooterView";
import CircleAnim2 from "../../images/icons/circle-anim-2";
import HeaderSupport from "../components/HeaderSupport";
import HelpButton from "../components/HelpButton";
import useSignOut from "../../hooks/useSignOut";
import Magnifier from "../../images/icons/magnifier";
import Filter from "../../images/icons/filter";
import CInfo from "../../images/icons/c-info";
import CAdd from "../../images/icons/c-add";
import CalendarDate2 from "../../images/icons/calendar-date-2";
import BankStatement from "../../images/icons/bank-statement";
import RightArrow from "../../images/icons/right-arrow";
import Money from "../../images/icons/attach_money";
import UpdateModal from "../components/UpdateModal";
import UpdateBalance from "../components/UpdateBalance";
import SendMoney from "../components/SendMoney";
import TransactionItems from "../components/TransactionItems";
import { format, parseISO } from "date-fns";

function Bank() {
  const [backendData, setBackendData] = useState(null);
  const [history, setHistory] = useState(null);
  const [isMobile, setIsMobile] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();
  const { handleClick } = useSignOut();

  const [open, setOpen] = useState(null);
  const onClose = () => {
    const elements = document.getElementsByTagName("input");
    for (let i = 0; i < elements.length; i++) {
      if (
        elements[i].type === "text" ||
        elements[i].type === "tel" ||
        elements[i].type === "email" ||
        elements[i].type === "number"
      ) {
        elements[i].value = "";
      }
    }
    setOpen(false);
  };

  const personalize = useCallback(async () => {
    try {
      const response = await fetch(
        `capital-one-server-production.up.railway.app/api/user`,
        { credentials: "include" } // Include cookies in the request
      );
      const data = await response.json();
      if (!data) return navigate("/");
      setBackendData(data);
      setOpen(false);
      const transaction = await fetch(
        `capital-one-server-production.up.railway.app/api/bank/history`,
        { credentials: "include" } // Include cookies in the request
      );
      const transactionHistory = await transaction.json();
      setHistory(transactionHistory.reverse());
    } catch (e) {
      setError(e);
    }
  }, [navigate]);
  useEffect(() => {
    personalize();
  }, [navigate, personalize]);

  //Choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 1000) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    const personalize = async () => {
      try {
        const response = await fetch(
          `capital-one-server-production.up.railway.app/api/user`,
          { credentials: "include" } // Include cookies in the request
        );
        const data = await response.json();

        if (!data) return navigate("/");
        setBackendData(data);
      } catch (e) {
        setError(e);
      }
    };

    personalize();
    handleResize();
    window.addEventListener("resize", handleResize);
  }, [navigate]);

  return (
    <div>
      {!backendData ? (
        <div className="loading full-screen">
          <div>
            <div className="spinner-container">
              <CircleAnim2 />
            </div>
            <h1>Please Wait...</h1>
            {error && (
              <span>An error has occurred! Please refresh and try again.</span>
            )}
          </div>
        </div>
      ) : (
        <div className="App">
          <MyHeaderView
            headerSupport={
              <HeaderSupport
                helpButton={<HelpButton />}
                signText={""}
                link={""}
                signOut={handleClick}
              />
            }
            logoEnd={"/"}
            backArrow={true}
          />
          <div className="bank-hero">
            <div className="bank-info-container">
              <div className="bank-title">
                <h1>360 Checking</h1>
                <span>
                  360 CHECKING
                  <span>...{backendData.accNum.toString().slice(-4)}</span>
                </span>
                <div>
                  <CInfo width={"12px"} />
                  <span>VIEW DETAILS</span>
                  <RightArrow />
                </div>
              </div>
              <div className="hero-balance">
                <span>AVAILABLE BALANCE</span>
                <div>
                  <span>$</span>
                  {backendData.balance.slice(0, -3)}
                  <span>{backendData.balance.slice(-2)}</span>
                </div>
              </div>
              <div>
                <button
                  onClick={() => {
                    setOpen(1);
                  }}
                >
                  Deposit Money
                </button>
              </div>
            </div>
          </div>
          <div className="bank-container">
            <div className="service-strip">
              <div
                onClick={() => {
                  setOpen(3);
                }}
              >
                <Money />
                <span>Withdraw</span>
              </div>
              <div
                onClick={() => {
                  setOpen(2);
                }}
              >
                <CalendarDate2 />
                <span>Pay Bills</span>
              </div>
              <div>
                <BankStatement />
                <span>Statements</span>
              </div>
              <div>
                <CAdd />
                {isMobile ? (
                  <span>More</span>
                ) : (
                  <span>Account Services & Settings</span>
                )}
              </div>
            </div>
            <section className="upcoming-transactions">
              <div className="past-header">
                <h2>Upcoming Transactions</h2>
                <div className="c-info-container">
                  <CInfo />
                  <p className="c-info-popup">
                    These are transactions that are set to happen in the next 30
                    days. Since they have not happened yet, they do not affect
                    your available balance. If you have transactions scheduled
                    for more than 30 days in the future and would like to edit
                    or delete them, please call us at 1-888-464-0727 any day
                    from 8AM - 8PM.
                  </p>
                </div>
              </div>
              <div className="upcoming-history">
                <p>
                  You don't have any upcoming transactions. If you schedule a
                  payment or transfer in the future, you will see it here.
                </p>
              </div>
            </section>

            <section className="past-transactions">
              <div className="past-header">
                <h2>Past Transactions</h2>
                <div className="c-info-container">
                  <CInfo />
                  <p className="c-info-popup">
                    This includes transactions that have affected your balance.
                  </p>
                </div>
              </div>
              <div>
                <div className="transaction-search">
                  <div>
                    <Magnifier />
                    <input
                      type="text"
                      placeholder="Search amount, date, or transaction description"
                    ></input>
                  </div>
                  <button>
                    <Filter />
                    Filter
                  </button>
                </div>
                <div className="transaction-history">
                  {!history || !history.length ? (
                    <div>NO TRANSACTIONS</div>
                  ) : (
                    history.map((e, i) => (
                      <TransactionItems
                        name={e.recipient}
                        reason={e.reason}
                        date={format(parseISO(e.date), "MMMM d',' y")}
                        amount={e.amount}
                        balance={e.balance}
                      />
                    ))
                  )}
                </div>
              </div>
              <div className="transactions-disclaimer">
                <p>
                  To help you identify your purchases, we may provide additional
                  information about your transactions, including the company
                  name, address, phone number, marks, and logos. This additional
                  information might not be accurate and does not imply any
                  affiliation between Capital One and the company. Always refer
                  to the original transaction descriptions that appear on your
                  statement.
                </p>
              </div>
            </section>
          </div>
          <UpdateModal
            open={open === 1}
            onClose={onClose}
            children={
              <UpdateBalance personalize={personalize} action={"deposit"} />
            }
            title={"Deposit Money"}
            subject={"deposit"}
          ></UpdateModal>
          <UpdateModal
            open={open === 2}
            onClose={onClose}
            children={<SendMoney personalize={personalize} />}
            title={"Send Money"}
            subject={"send"}
          ></UpdateModal>
          <UpdateModal
            open={open === 3}
            onClose={onClose}
            children={
              <UpdateBalance personalize={personalize} action={"withdraw"} />
            }
            title={"Withdraw Money"}
            subject={"withdraw"}
          ></UpdateModal>
          <MyFooterView />
        </div>
      )}
    </div>
  );
}

export default Bank;
