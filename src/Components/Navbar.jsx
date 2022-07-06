import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="App-header">
      <nav>
        <ul className="flex gap-10">
          <li className="nav-link">
            <NavLink className={({ isActive }) => isActive? "link-active": "link-generic"} to="/home">Home</NavLink>
          </li>
          <li className="nav-link">
            <NavLink className={({ isActive }) => isActive? "link-active": "link-generic"} to="/films">Films</NavLink>
          </li>
          <li className="nav-link">
            <NavLink className={({ isActive }) => isActive? "link-active": "link-generic"} to="/people">People</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
