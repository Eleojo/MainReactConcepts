import { createContext, useReducer } from "react";
import { useState } from "react";
const userContext = createContext();

function UserProvider({ children }) {
  //   const [username, setUsername] = useState("guest");
  function reducer(user, action) {
    if (action.type == "login") {
      //
      return { user: action.payload };
    }
    if (action.type == "logout") {
      //
      return { user: action.payload };
    }
  }
  const [state, dispatch] = useReducer(reducer, { user: null });

  return (
    <userContext.Provider value={{ ...state, dispatch }}>
      {children}
    </userContext.Provider>
  );
}
export { UserProvider, userContext };
