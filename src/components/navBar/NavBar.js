import React from "react";
import { NavLink } from "react-router-dom";
import * as route from "../../routes/routes";

export const NavBar = () => {
  return (
    <nav>
      <div className="nav-left">
        <NavLink exact activeClassName="activeNav" to={route.HOME}>
          Home
        </NavLink>
        <NavLink exact activeClassName="activeNav" to={route.MARVEL}>
          Marvel
        </NavLink>
        <NavLink exact activeClassName="activeNav" to={route.DC}>
          DC
        </NavLink>
        <NavLink exact activeClassName="activeNav" to={route.SEARCH}>
          Search
        </NavLink>
      </div>
      <div>
        <NavLink exact activeClassName="activeNav" to={route.LOGIN}>
          Logout
        </NavLink>
      </div>
    </nav>
  );
};
