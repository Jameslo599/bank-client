import React, { useState } from "react";
import Loading from "../components/Loading";
import useInfo from "../../hooks/useInfo";

function UpdateBalance({ personalize, action }) {
  const [formData, setFormData] = useState({
    [action]: "",
  });
  const { isLoading, handleSubmit } = useInfo(
    formData,
    `/api/bank/${action}`,
    personalize
  );
  const handleChange = (e) => {
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
          <div className="update-greeting-container">
            <label
              className="update-greeting__label-container_label"
              htmlFor={action}
            >
              Amount (Min: $1 | Max: $99,999)
            </label>
          </div>
          <input
            type="number"
            className="update-greeting__input"
            onChange={handleChange}
            max="100000"
            min="1"
            name={action}
            step={"0.01"}
            onKeyDown={onlyNumbers}
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
