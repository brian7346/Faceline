import { TEST_DISPATCH } from "./types";

// Register User
// Регистрация Пользователя
export const registerUserAction = userData => {
  return {
    type: TEST_DISPATCH,
    payload: userData
  };
};
