import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Homepage() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  function handleClick() {
    navigate("/Dashboard/Profile", { state: { username } });
  }
  return (
    <div>
      This is a Homepage
      <Link to="/Products">Products</Link>
      <button onClick={handleClick}>Go to Profile page</button>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
  );
}
