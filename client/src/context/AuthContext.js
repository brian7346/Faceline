import React, { useReducer } from "react";
import { authReducer, initialState } from "reducers/authReducer";

let AuthContext = React.createContext();

const AuthProvider = props => {
  let [auth, changleAuth] = useReducer(authReducer, initialState);
  let value = { auth, changleAuth };
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
