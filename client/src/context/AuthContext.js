import React, { useReducer } from "react";
import { authReducer } from "../reducers";

let initialState = {
  isAuthenticated: false,
  user: {}
};

let AuthContext = React.createContext();

const AuthProvider = props => {
  let [auth, changleAuth] = useReducer(authReducer, initialState);
  let value = { auth, changleAuth };
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
