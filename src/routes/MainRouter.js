import React from "react";
import * as route from "../routes/routes";
import { Switch, Route, Redirect } from "react-router-dom";

import { NavBar } from "../components/navBar/NavBar";
import { Marvel } from "../components/marvel/Marvel";
import { Dc } from "../components/dc/Dc";
import { Heroes } from "../components/heroes/Heroes";
import { Logout } from "../components/logout/Logout";
import { Search } from "../components/search/Search";
import { Home } from "../components/home/Home";

export const MainRouter = () => {
  return (
    <>
      <NavBar />
      <div>
        <Switch>
          <Route exact path={route.HOME} component={Home} />
          <Route exact path={route.MARVEL} component={Marvel} />
          <Route exact path={route.DC} component={Dc} />
          <Route exact path={route.HEROESID} component={Heroes} />
          <Route exact path={route.LOGOUT} component={Logout} />
          <Route exact path={route.SEARCH} component={Search} />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};
