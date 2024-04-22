import React, { useState } from "react";
import useInfo from "../../hooks/useInfo";
import Loading from "../components/Loading";

function UpdatePassword({ personalize }) {
  const [formData, setFormData] = useState({
    currentPass: "",
    password: "",
    confirm: "",
  });
  const { isLoading, handleSubmit } = useInfo(
    formData,
    "/api/update/password",
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
            <label className="update-residential__label" htmlFor="currentPass">
              Your Current Password
            </label>
            <input
              className="update-residential__input"
              type="password"
              maxLength={38}
              name="currentPass"
              onChange={handleChange}
              required
            ></input>
          </div>
          <div>
            <label className="update-residential__label" htmlFor="newPass">
              Your New Password
            </label>
            <input
              className="update-residential__input"
              type="password"
              maxLength={38}
              name="password"
              onChange={handleChange}
              required
            ></input>
          </div>
          <div>
            <label className="update-residential__label" htmlFor="confirm">
              Retype Your New Password
            </label>
            <input
              className="update-residential__input"
              type="password"
              name="confirm"
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

export default UpdatePassword;
