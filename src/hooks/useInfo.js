import { useState } from "react";
import { toast, Bounce } from "react-toastify";
import useSignOut from "./useSignOut";

function useInfo(data, param, callback) {
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
      //toastId: "error",
    });
  const notifySuccess = (msg) =>
    toast.success(msg, {
      position: "top-center",
      autoClose: true,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
      // toastId: "success",
    });
  const dismissAll = () => toast.dismiss();

  const { handleClick } = useSignOut();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dismissAll();
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://capital-one-server.onrender.com${param}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const confirmation = await response.json();
      const status = await response.status;
      if (confirmation === "signout") {
        handleClick(e);
      }
      if (status === 200) {
        notifySuccess(confirmation);
        if (data.message) data.message = "";
        callback();
      } else {
        for (const error of confirmation) {
          notifyError(`${error.msg}`);
        }
      }
    } catch (e) {
      notifyError(e);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, handleSubmit };
}

export default useInfo;
