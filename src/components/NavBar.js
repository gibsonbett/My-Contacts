import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div className="navbar">
  <ul>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/contacts">Contacts</NavLink></li>
    <li><NavLink to="addcontact">Add new contact</NavLink></li>
    <li><NavLink to="search">Search Contact</NavLink></li>
    </ul>
  </div>;}

export default NavBar;
