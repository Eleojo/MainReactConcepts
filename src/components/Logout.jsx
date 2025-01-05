import { userContext } from "../context/UserContext";
import { useContext } from "react";
export default function Logout() {
  const { dispatch } = useContext(userContext);

  function handleClick() {
    dispatch({ type: "logout", payload: "guest" });
  }
  return (
    <div>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}
