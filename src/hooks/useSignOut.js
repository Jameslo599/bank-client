import { useNavigate } from "react-router-dom";

function useSignOut() {
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://server.resilientcoda.com/api/session",
        {
          method: "DELETE",
          credentials: "include", // Include cookies in the request
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
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
