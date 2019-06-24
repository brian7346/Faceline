import axios from "axios";
import { setAuthToken } from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";

// Register User
// Регистрация Пользователя
export const registerUserAction = (userData, changeErrors, history) => {
  axios
    .post("/api/users/register/", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      changeErrors({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
// Login - Get User Token
// Вход - получение токена для пользователя
export const loginUserAction = (userData, changeErrors) => {
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
