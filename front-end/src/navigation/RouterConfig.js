import React from "react";
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "navigation/PrivateRoute";
import { PublicRoute } from "navigation/PublicRoute";
import { NotFound } from "navigation/NotFound";
import Home, { Terms, Privacy } from "pages/Home";
import Dashboard from "pages/Dashboard";
import { Login, SignUp, Reset, Delete } from "pages/Authentication";
import {
  ROOT,
  SIGN_IN,
  SIGN_UP,
  RESET,
  DELETE,
  DASHBOARD,
  TERMS,
  PRIVACY,
} from "navigation/CONSTANTS";

export const RouterConfig = () => {
  return (
    <div>
      <Switch>
        <PublicRoute exact path={ROOT} component={Home} />
        <PublicRoute exact path={SIGN_IN} component={Login} />
        <PublicRoute exact path={SIGN_UP} component={SignUp} />
        <PrivateRoute exact path={DASHBOARD} component={Dashboard} />
        <Route exact path={RESET} component={Reset} />
        <Route exact path={DELETE} component={Delete} />
        <Route exact path={TERMS} component={Terms} />
        <Route exact path={PRIVACY} component={Privacy} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};
