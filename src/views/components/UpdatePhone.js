import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import useInfo from "../../hooks/useInfo";

function UpdatePhone({ personalize, type, open }) {
  const [formData, setFormData] = useState({
    use: type,
    confirm: "",
  });
  const { isLoading, handleSubmit } = useInfo(
    formData,
    "/api/update/phone",
    personalize
  );
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(formData[formData.use], formData);
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

  useEffect(() => {
    if (!open)
      setFormData({
        use: type,
        confirm: "",
      });
  }, [open, type]);

  return (
    <>
      {!isLoading ? (
        <form
          className="update-residential"
          method="put"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="update-greeting__label" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="update-greeting__input"
              type="tel"
              id="phone"
              placeholder="(XXX) XXX-XXXX"
              maxLength={10}
              minLength={10}
              name={type}
              onChange={handleChange}
              onKeyDown={onlyNumbers}
              required
            ></input>
          </div>
          <div>
            <label className="update-greeting__label" htmlFor="confirm">
              Re-Enter Your Number
            </label>
            <input
              className="update-greeting__input"
              type="tel"
              id="confirm"
              placeholder="(XXX) XXX-XXXX"
              maxLength={10}
              minLength={10}
              name="confirm"
              onChange={handleChange}
              onKeyDown={onlyNumbers}
              required
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

export default UpdatePhone;
