import axios from "axios";

// Register User
// Регистрация Пользователя
export const registerUserAction = userData => {
  axios
    .post("/api/users/register/", userData)
    .then(res => res.data)
    .catch(err => console.log(err));
};
