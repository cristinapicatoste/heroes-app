import React from "react";
// import * as route from "./routes/routes";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import { NavBar } from "./components/navBar/NavBar";
// import { Marvel } from "./components/marvel/Marvel";
// import { Dc } from "./components/dc/Dc";
// import { Heroes } from "./components/heroes/Heroes";
// import { Login } from "./components/login/Login";

import "./App.css";
import { AppRouter } from "./routes/AppRouter";
import { MainRouter } from "./routes/MainRouter";

function App() {
  return (
    <>
      {/* <Router>
       <NavBar />
       <Switch>
         <Route exact path={route.HOME} component={Marvel} />
         <Route exact path={route.MARVEL} component={Marvel} />
         <Route exact path={route.DC} component={Dc} />
         <Route exact path={route.HEROES} component={Heroes} />
         <Route exact path={route.LOGIN} component={Login} />
       </Switch>
     </Router> */}
      <AppRouter />
      {/* <MainRouter /> */}
    </>
  );
}

export default App;
