import React, { useState } from "react";
import State from "../../images/icons/select-state";
import useInfo from "../../hooks/useInfo";
import Loading from "../components/Loading";

function UpdateMailing({ personalize }) {
  const [formData, setFormData] = useState({
    mail_address: "",
    mail_apartment: "",
    mail_city: "",
    mail_state: "",
    mail_zip: "",
  });
  const { isLoading, handleSubmit } = useInfo(
    formData,
    "/api/update/mail-address",
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
          name="mailing_address"
          autoComplete="true"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="update-residential__label" htmlFor="street">
              Street Address
            </label>
            <input
              className="update-residential__input"
              type="text"
              id="street"
              placeholder="Street Address"
              maxLength={38}
              name="mail_address"
              onChange={handleChange}
              required
            ></input>
          </div>
          <div>
            <label className="update-residential__label" htmlFor="apartment">
              Apartment or Suite (optional)
            </label>
            <input
              className="update-residential__input"
              type="text"
              id="apartment"
              placeholder="Apartment or Suite #"
              name="mail_apartment"
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label className="update-residential__label" htmlFor="city">
              City
            </label>
            <input
              className="update-residential__input"
              type="text"
              id="city"
              placeholder="City"
              name="mail_city"
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="update-residential__state-container">
            <div>
              <label className="update-residential__label" htmlFor="state">
                State
              </label>
              <State handleChange={handleChange} name={"mail_state"} />
            </div>
            <div>
              <label className="update-residential__label" htmlFor="zip">
                ZIP Code
              </label>
              <input
                className="update-residential__input"
                type="text"
                id="zip"
                placeholder="ZIP Code"
                maxLength={10}
                name="mail_zip"
                onChange={handleChange}
                required
              ></input>
            </div>
          </div>
          <div className="update-residential__button">
            <button>Save</button>
          </div>
        </form>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default UpdateMailing;
