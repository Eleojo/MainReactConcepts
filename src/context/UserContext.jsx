import { createContext, useReducer } from "react";
import { useState } from "react";
const userContext = createContext();

function UserProvider({ children }) {
  //   const [username, setUsername] = useState("guest");
  function reducer(user, action) {
    if (action.type == "login") {
      //
      return action.payload;
    }
    if (action.type == "logout") {
      //
      return action.payload;
    }
  }
  const [user, dispatch] = useReducer(reducer, "");

  return (
    <userContext.Provider value={{ user, dispatch }}>
      {children}
    </userContext.Provider>
  );
}
export { UserProvider, userContext };
