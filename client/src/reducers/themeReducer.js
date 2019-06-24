import { CHANGE_THEME } from "../actions/types";

export let initialState = {
  darkMode: false
};

export let themeReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};
