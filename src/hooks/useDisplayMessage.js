import { useState } from "react";

export default function useDisplayMessage() {
  const [message] = useState("This is a custom hook");
  function DisplayMessage() {
    return console.log("custom hook");
  }
  return [message, DisplayMessage];
}
