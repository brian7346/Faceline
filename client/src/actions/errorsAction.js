import { GET_ERRORS } from "./types";

// Change Errors
// Обработка ошибок
export const changeErrorsAction = errors => {
  return {
    type: GET_ERRORS,
    payload: errors
  };
};
