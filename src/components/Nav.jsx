import "./Nav.css";
import { NavLink } from "react-router-dom";

function Nav({ color }) {
  return (
    <nav className="nav" style={{ backgroundColor: color }}>
      <h2 className="nav-title">Konrad's Project</h2>
      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
