import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import * as route from "../../routes/routes";
import { AuthContext } from "../../auth/AuthContext";
import { types } from '../../types/types';
import './NavBar.css'

export const NavBar = () => {

  const { user: { name }, dispatch } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    dispatch({
      type: types.logout,
      // name: "",
      // payload: false
    });

    history.replace("/login");
  }

  return (
    <nav className="nav">
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
      <div className="nav-right">
        <p className="text">{name}</p>
        <span onClick={handleLogout} className="logout">Logout</span>
      </div>
    </nav>
  );
};
