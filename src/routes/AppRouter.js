import React, { useContext } from "react";
import * as route from "../routes/routes";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Login } from "../components/login/Login";
import { MainRouter } from "./MainRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { AuthContext } from "../auth/AuthContext"

export const AppRouter = () => {

  const { user } = useContext(AuthContext)

  return (
    <Router>
      <Switch>
        {/* <Route exact path={route.LOGIN} component={Login} /> */}
        <PublicRoute exact path={route.LOGIN} component={Login} isAuth={user.logged} />

        {/* <Route path={route.HOME} component={MainRouter} /> */}
        <PrivateRoute path={route.HOME} component={MainRouter} isAuth={user.logged} />
      </Switch>
    </Router>
  );
};
