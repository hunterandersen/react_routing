import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/films">Films</NavLink>
          </li>
          <li>
            <NavLink to="/people">People</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
