import { createContext } from "react";
import { useState } from "react";
const userContext = createContext();

function UserProvider({ children }) {
  const [username, setUsername] = useState("guest");

  return (
    <userContext.Provider value={{ username, setUsername }}>
      {children}
    </userContext.Provider>
  );
}
export { UserProvider, userContext };
