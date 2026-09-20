import "./About.css";
import { NavLink, Outlet } from "react-router-dom";

function About() {
  return (
    <>
      <div className="about-container">
        <div className="header">
          <h1>About me</h1>
          <NavLink to="/About/sports" className="link">
            Favorite Sports
          </NavLink>
          <NavLink to="/About/hobbies" className="link">
            Hobbies
          </NavLink>
        </div>

        <Outlet />
      </div>
    </>
  );
}

export default About;
