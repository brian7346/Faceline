import axios from "axios";

export const setAuthToken = token => {
  if (token) {
    // Apply to every request
    // Добавляем токен ко всем запросам
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Delete Auth Header
    // Удаляем токен из запросов
    delete axios.defaults.headers.common["Authorization"];
  }
};
