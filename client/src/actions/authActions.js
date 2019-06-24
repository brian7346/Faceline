import axios from "axios";
import jwt_decode from "jwt-decode";
import { setAuthToken } from "../utils/setAuthToken";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";

// Register User
// Регистрация Пользователя
export const registerUserAction = (userData, changeErrors, history) => {
  axios
    .post("/api/users/register/", userData)
    .then(() => history.push("/login"))
    .catch(err =>
      changeErrors({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
// Login - Get User Token
// Вход - получение токена для пользователя
export const loginUserAction = (userData, changeAuth, changeErrors) => {
  axios
    .post("/api/users/login/", userData)
    .then(res => {
      //Save to localStorage
      const { token } = res.data;

      //Set token to ls
      localStorage.setItem("jwtToken", token);

      //Set token to Auth header
      setAuthToken(token);

      //Decode Token to get User data
      //Достаём данные пользователя из токена
      const decoded = jwt_decode(token);

      //Set current user
      changeAuth(setCurrentUser(decoded));
    })
    .catch(err =>
      changeErrors({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

//Log user out
export const logoutUserAction = changeUser => {
  //Remove token from localstorage
  //Удаляем Токен из localstorage
  localStorage.removeItem("jwtToken");

  //Remove auth header
  //Удаляем хедер из axios
  setAuthToken(false);

  //Set current user to {}
  changeUser(setCurrentUser({}));
};
