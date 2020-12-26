import React from "react";
import * as route from "../routes/routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "../components/login/Login";
import { MainRouter } from "./MainRouter";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={route.LOGIN} component={Login} />

        <Route path={route.HOME} component={MainRouter} />
      </Switch>
    </Router>
  );
};
