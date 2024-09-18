import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <div className="menu-container">
          <button className="menu-button">Menu</button>
          <ul className="dropdown">
            <li>
              <Link to="/" className="dropdown-item">Home</Link>
            </li>
            <li>
              <Link to="/Login" className="dropdown-item">Login</Link>
            </li>
            <li>
              <Link to="/SignUp" className="dropdown-item">SignUp</Link>
            </li>
            <li>
              <Link to="/Registration" className="dropdown-item">Registration</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
