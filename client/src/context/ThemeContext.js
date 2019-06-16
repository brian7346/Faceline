import React, { useReducer } from "react";
import { themeReducer, initialState } from "../reducers/themeReducer";

let ThemeContext = React.createContext();

const ThemeProvider = props => {
  let [state, dispatch] = useReducer(themeReducer, initialState);
  let value = { state, dispatch };
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};

let ThemeConsumer = ThemeContext.Consumer;

export { ThemeContext, ThemeProvider, ThemeConsumer };
