import React, { useState } from "react";
import Loading from "../components/Loading";
import useInfo from "../../hooks/useInfo";

function UpdateBalance({ personalize }) {
  const [formData, setFormData] = useState({
    deposit: "",
  });
  const { isLoading, handleSubmit } = useInfo(
    formData,
    "/api/bank/deposit",
    personalize
  );
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
          <div className="update-greeting-container">
            <label
              className="update-greeting__label-container_label"
              htmlFor="deposit"
            >
              Amount (Max: $99,999)
            </label>
          </div>
          <input
            type="number"
            className="update-greeting__input"
            onChange={handleChange}
            max="100000"
            min="10"
            name="deposit"
            step={"0.01"}
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

export default UpdateBalance;
