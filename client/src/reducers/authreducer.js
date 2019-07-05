import { SET_CURRENT_USER } from "../actions/types";
import { isEmpty } from "validation/is-empty";

export let initialState = {
  isAuthenticated: false,
  user: {}
};

export let authReducer = (state, action) => {
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
