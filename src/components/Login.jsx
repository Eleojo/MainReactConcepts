// import { userContext } from "../App";
import { useContext, useState } from "react";
import { userContext } from "../context/UserContext";
import useLocalStorage from "../hooks/useLocalStorage";
export default function Login() {
  const [value, setValue] = useState("");
  const { state, dispatch } = useContext(userContext);
  const [user, setUser] = useLocalStorage();
  function handleSubmit(e) {
    e.preventDefault();
    // setUsername(value);
    dispatch({ type: "login", payload: value });
  }
  function handleClick() {
    setUser(value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleClick} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
