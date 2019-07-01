import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE
} from "../actions/types";

export let initialState = {
  profile: null,
  profiles: null,
  loading: false
};

export let profileReducer = (state, action) => {
  switch (action.type) {
    case PROFILE_LOADING:
      return { ...state, loading: true };
    case GET_PROFILE:
      return { ...state, profile: action.payload, loading: false };
    case GET_PROFILES:
      return { ...state, profiles: action.payload, loading: false };
    case CLEAR_CURRENT_PROFILE:
      return { ...state, profile: null };
    default:
      return state;
  }
};
