import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "context/AuthContext";
import { DASHBOARD } from "navigation/CONSTANTS";
// Redirect to Dashboard if already signed in. For Login,Sign Up & DashboardPage

export const PublicRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return !user ? <Component {...props} /> : <Redirect to={DASHBOARD} />;
      }}
    ></Route>
  );
};
