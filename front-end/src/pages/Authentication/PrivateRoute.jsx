import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "context/AuthContext";
import { SIGN_IN } from "navigation/CONSTANTS";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to={SIGN_IN} />
        );
      }}
    ></Route>
  );
};
