import { userContext } from "../App";
import { useContext } from "react";

export default function Checkout() {
  const { username } = useContext(userContext);
  return <div>Welcome {username}</div>;
}
