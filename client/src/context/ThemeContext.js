import React, { useReducer } from "react";
import { themeReducer, initialState } from "../reducers/themeReducer";

let ThemeContext = React.createContext();

const ThemeProvider = props => {
  let [theme, changeTheme] = useReducer(themeReducer, initialState);
  let value = { theme, changeTheme };
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
