import React, { useReducer } from "react";
import { errorReducer, initialState } from "../reducers/errorReducer";

let ErrorContext = React.createContext();

const ErrorProvider = props => {
  let [errors, changeErrors] = useReducer(errorReducer, initialState);
  let value = { errors, changeErrors };
  return (
    <ErrorContext.Provider value={value}>
      {props.children}
    </ErrorContext.Provider>
  );
};

export { ErrorContext, ErrorProvider };
