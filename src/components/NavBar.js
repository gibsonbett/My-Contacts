import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink id="nav_items" to="/">
        Home
      </NavLink>
      <NavLink id="nav_items" to="/contacts">
        Contacts
      </NavLink>
      <NavLink id="nav_items" to="/addcontact">
        Create contact
      </NavLink>
    </div>
  );
}

export default NavBar;
