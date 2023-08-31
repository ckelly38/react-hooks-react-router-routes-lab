import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <ul>
        <li><NavLink to="/movies">Movies</NavLink></li>
        <li><NavLink to="/directors">Directors</NavLink></li>
        <li><NavLink to="/actors">Actors</NavLink></li>
        <li><NavLink exact to="/">Home</NavLink></li>
      </ul>
    </div>
  );
}

export default NavBar;
