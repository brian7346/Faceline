import axios from "axios";
import { changeErrorsAction } from "../actions/errorsAction";

// Register User
// Регистрация Пользователя
export const registerUserAction = (userData, changeErrors, history) => {
  axios
    .post("/api/users/register/", userData)
    .then(res => history.push("/login"))
    .catch(err => changeErrors(changeErrorsAction(err.response.data)));
};
