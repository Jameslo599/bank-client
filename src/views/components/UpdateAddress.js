import React, { useState } from "react";
import State from "../../images/icons/select-state";
import useInfo from "../../hooks/useInfo";
import Loading from "../components/Loading";

function UpdateAddress({ personalize }) {
  const [formData, setFormData] = useState({
    street_address: "",
    apartment_suite: "",
    city: "",
    state: "",
    zip: "",
  });
  const { isLoading, handleSubmit } = useInfo(
    formData,
    "/api/update/address",
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
        e.key === "Enter"
      )
        return;
      e.preventDefault();
    }
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
            <label className="update-residential__label" htmlFor="street">
              Street Address
            </label>
            <input
              className="update-residential__input"
              type="text"
              id="street"
              placeholder="Street Address"
              maxLength={38}
              name="street_address"
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
              name="apartment_suite"
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
              name="city"
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="update-residential__state-container">
            <div>
              <label className="update-residential__label" htmlFor="state">
                State
              </label>
              <State handleChange={handleChange} name={"state"} />
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
                name="zip"
                onChange={handleChange}
                onKeyDown={onlyNumbers}
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

export default UpdateAddress;
