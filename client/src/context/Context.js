import React, { useReducer } from "react";

let StateContext = React.createContext();

let initialState = {
  darkMode: false
};

let reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};

const StateProvider = props => {
  let [state, dispatch] = useReducer(reducer, initialState);
  let value = { state, dispatch };
  return (
    <StateContext.Provider value={value}>
      {props.children}
    </StateContext.Provider>
  );
};

let StateConsumer = StateContext.Consumer;

export { StateContext, StateProvider, StateConsumer };
