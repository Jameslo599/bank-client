import { useState } from "react";

function useFormData(initialState, secondaryState) {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [addressData, setAddressData] = useState(secondaryState);

  const handleAddress = (e) => {
    const { name, value } = e.target;
    setAddressData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBox = () => {
    if (formData.remember === undefined) return;
    const value = formData.remember === false ? true : false;
    setFormData((prevState) => ({
      ...prevState,
      remember: value,
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
  return {
    formData,
    handleChange,
    handleBox,
    onlyNumbers,
    addressData,
    handleAddress,
  };
}

export default useFormData;
