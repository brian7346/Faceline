import { TEST_DISPATCH } from "../actions/types";
export let initialState = {
  isAuthenticated: false,
  user: {}
};

export let authReducer = (state, action) => {
  switch (action.type) {
    case TEST_DISPATCH:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};
