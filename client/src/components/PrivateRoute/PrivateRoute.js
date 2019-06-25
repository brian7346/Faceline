import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import PropTypes from "prop-types";

const PrivateRoute = ({ component: Component, ...rest }) => {
  let { auth } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={props =>
        auth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="login" />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  Component: PropTypes.element.isRequired
};

export default PrivateRoute;
