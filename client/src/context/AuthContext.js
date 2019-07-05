import React, { useReducer } from "react";
// import { authReducer, initialState } from "../reducers/authReducer";

import { SET_CURRENT_USER } from "../actions/types";
import { isEmpty } from "../validation/is-empty";

let initialState = {
  isAuthenticated: false,
  user: {}
};

let authReducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
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
