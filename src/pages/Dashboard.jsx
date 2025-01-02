import { Link, Outlet } from "react-router-dom";
export default function Dashboard() {
  return (
    <div>
      <ul>
        <li>
          <Link to="Settings">Settings</Link>
        </li>
        <li>
          <Link to="Profile">Profile</Link>
        </li>
      </ul>
      This is a Dashboard
      <Outlet />
    </div>
  );
}
