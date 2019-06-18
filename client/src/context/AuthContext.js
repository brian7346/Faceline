import React, { useReducer } from "react";
import { authReducer, initialState } from "../reducers/authreducer";

let AuthContext = React.createContext();

const AuthProvider = props => {
  let [state, dispatch] = useReducer(authReducer, initialState);
  let value = { state, dispatch };
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

let AuthConsumer = AuthContext.Consumer;

export { AuthContext, AuthProvider, AuthConsumer };
