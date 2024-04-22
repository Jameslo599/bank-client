import React, { useState } from "react";
import useInfo from "../../hooks/useInfo";
import Loading from "../components/Loading";

function UpdateUsername({ personalize }) {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });
  const { isLoading, handleSubmit } = useInfo(
    formData,
    "/api/update/username",
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
          method="put"
          className="update-residential"
          name="residential_address"
          autoComplete="true"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="update-residential__label" htmlFor="userName">
              New Username
            </label>
            <input
              className="update-residential__input"
              type="text"
              maxLength={38}
              name="userName"
              onChange={handleChange}
              required
            ></input>
          </div>
          <div>
            <label className="update-residential__label" htmlFor="password">
              Current Password
            </label>
            <input
              className="update-residential__input"
              type="password"
              name="password"
              onChange={handleChange}
              required
            ></input>
          </div>

          <div className="update-residential__button">
            <button>Confirm</button>
          </div>
        </form>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default UpdateUsername;
