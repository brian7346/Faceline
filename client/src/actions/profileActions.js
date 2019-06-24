import axios from "axios";
import {
  GET_PROFILE,
  PROFILE_LOADING,
  GET_ERRORS,
  CLEAR_CURRENT_PROFILE
} from "./types";

export const getCurrentProfileAction = changeProfile => {
  changeProfile(setProfileLoadingAction);
  axios
    .get("/api/profile")
    .then(res => {
      changeProfile({
        type: GET_PROFILE,
        payload: res.data
      });
    })
    .catch(err => {
      changeProfile({
        type: GET_PROFILE,
        payload: {}
      });
    });
};

//Profile Loading
//Профиль загружается
export const setProfileLoadingAction = () => {
  return {
    type: PROFILE_LOADING
  };
};

//Clear Profile
//Очистить профиль
export const clearCurrentProfileAction = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};
