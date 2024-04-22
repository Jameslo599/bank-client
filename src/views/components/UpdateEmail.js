import React, { useState } from "react";
import Loading from "./Loading";
import useInfo from "../../hooks/useInfo";

function UpdateEmail({ personalize }) {
  const [formData, setFormData] = useState({
    email: "",
    confirm: "",
  });
  const { isLoading, handleSubmit } = useInfo(
    formData,
    "/api/update/email",
    personalize
  );
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      {!isLoading ? (
        <form
          className="update-residential"
          method="put"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="update-greeting__label" htmlFor="email">
              Email Address
            </label>
            <input
              className="update-greeting__input"
              type="email"
              id="email"
              placeholder="email@website.com"
              onChange={handleChange}
              required
              name="email"
            ></input>
          </div>
          <div>
            <label className="update-greeting__label" htmlFor="confirm">
              Re-Enter Your Email
            </label>
            <input
              className="update-greeting__input"
              type="email"
              id="confirm"
              placeholder="email@website.com"
              onChange={handleChange}
              required
              name="confirm"
            ></input>
          </div>
          <button className="update-greeting__button">Save</button>
        </form>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default UpdateEmail;
