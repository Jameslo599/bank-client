import React, { useState } from "react";
import Loading from "../components/Loading";
import useInfo from "../../hooks/useInfo";

function SendMoney({ personalize }) {
  const [count, setCount] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    amount: "",
    reason: "",
  });
  const { isLoading, handleSubmit } = useInfo(
    formData,
    "/api/bank/send",
    personalize
  );
  const handleChange = (e) => {
    if (e.target.name === "reason") setCount(e.target.value.length);
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const onlyNumbers = (e) => {
    if (e.which < 48 || e.which > 57) {
      if (
        e.key === "Backspace" ||
        e.key === "Delete" ||
        e.key === "Tab" ||
        e.key === "Enter" ||
        e.key === "."
      )
        return;
      e.preventDefault();
    }
  };

  return (
    <>
      {isLoading === false ? (
        <form
          className="update-greeting"
          method="put"
          onSubmit={handleSubmit}
          name="greeting_message"
        >
          <span>Send money to another Capital One account</span>
          <div className="update-greeting-container">
            <label
              className="update-greeting__label-container_label"
              htmlFor="email"
            >
              Recipient's Email
            </label>
          </div>
          <input
            type="email"
            className="update-greeting__input"
            onChange={handleChange}
            name="email"
            required
          ></input>
          <div className="update-greeting-container">
            <label
              className="update-greeting__label-container_label"
              htmlFor="amount"
            >
              Amount ($)
            </label>
          </div>
          <input
            type="number"
            className="update-greeting__input"
            onChange={handleChange}
            max="100000"
            min="1"
            name="amount"
            step={"0.01"}
            onKeyDown={onlyNumbers}
            required
          ></input>
          <div className="update-greeting-container">
            <label
              className="update-greeting__label-container_label"
              htmlFor="reason"
            >
              Reason
            </label>
            <span>{count} / 20</span>
          </div>
          <input
            type="text"
            className="update-greeting__input"
            onChange={handleChange}
            maxLength="20"
            name="reason"
            required
          ></input>
          <button className="update-greeting__button">Save</button>
        </form>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default SendMoney;
