import { useNavigate } from "react-router-dom";

function useSignOut() {
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/session", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const confirmation = await response.json();
      const status = await response.status;
      console.log(status);
      if (status === 200) {
        console.log(confirmation);
        return navigate("/");
      }
      console.log(confirmation);
    } catch (e) {
      console.log(e);
    }
  };

  return { handleClick };
}

export default useSignOut;
