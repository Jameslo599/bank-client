import React, { useState } from "react";
import Loading from "../components/Loading";
import useInfo from "../../hooks/useInfo";

function UpdateGreeting({ personalize }) {
  const [count, setCount] = useState(0);
  const [formData, setFormData] = useState({
    message: "",
  });
  const { isLoading, handleSubmit } = useInfo(
    formData,
    "/api/update/greeting",
    personalize
  );
  const handleChange = (e) => {
    setCount(e.target.value.length);
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
              htmlFor="greeting"
            >
              Greeting
            </label>
            <span>{count} / 20</span>
          </div>
          <input
            id="greeting"
            type="text"
            className="update-greeting__input"
            onChange={handleChange}
            maxLength="20"
            name="message"
          ></input>
          <button
            className="update-greeting__button"
            onClick={() => setCount(0)}
          >
            Save
          </button>
        </form>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default UpdateGreeting;
