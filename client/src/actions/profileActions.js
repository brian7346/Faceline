import axios from "axios";
import {
  GET_PROFILE,
  PROFILE_LOADING,
  GET_ERRORS,
  CLEAR_CURRENT_PROFILE,
  SET_CURRENT_USER
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
    .catch(() => {
      changeProfile({
        type: GET_PROFILE,
        payload: {}
      });
    });
};

//Create profile
//Создание профиля
export const createProfileAction = (profileData, history, changeErrors) => {
  axios
    .post("/api/profile", profileData)
    .then(() => {
      history.push("/dashboard");
      changeErrors({
        type: GET_ERRORS,
        payload: {}
      });
    })
    .catch(err =>
      changeErrors({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Add experience
//Добавить опыт
export const addExperienceAction = (expData, history, changeErrors) => {
  axios
    .post("/api/profile/experience", expData)
    .then(() => {
      changeErrors({
        type: GET_ERRORS,
        payload: {}
      });
      history.push("/dashboard");
    })
    .catch(err =>
      changeErrors({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Add education
//Добавить образование
export const addEducationAction = (eduData, history, changeErrors) => {
  axios
    .post("/api/profile/education", eduData)
    .then(() => {
      changeErrors({
        type: GET_ERRORS,
        payload: {}
      });
      history.push("/dashboard");
    })
    .catch(err =>
      changeErrors({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Delete experience
//Удалить образование
export const deleteExperienceAction = (id, changeProfile, changeErrors) => {
  axios
    .delete(`/api/profile/experience/${id}`)
    .then(res => {
      changeProfile({
        type: GET_PROFILE,
        payload: res.data
      });
    })
    .catch(err =>
      changeErrors({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Delete account & profile
//Удаляем аккаунт и профиль
export const deleteAccountAction = (changleAuth, changeErrors) => {
  if (window.confirm("Вы уверены? Аккаунт нельзя будет востановить")) {
    axios
      .delete("/api/profile")
      .then(res =>
        changleAuth({
          type: SET_CURRENT_USER,
          payload: {}
        })
      )
      .catch(err =>
        changeErrors({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  }
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
