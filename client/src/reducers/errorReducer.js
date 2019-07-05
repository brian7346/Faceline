import { GET_ERRORS } from "../actions/types";

export let initialState = {};

export let errorReducer = (state, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
};
