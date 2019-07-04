import { ADD_POST } from "../actions/types";

export let initialState = {
  posts: [],
  post: {},
  loading: false
};

export let postReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    default:
      return state;
  }
};
