const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  if (validator.isEmpty(data.title)) {
    errors.title = "Поле с названием не может быть пустым";
  }

  if (validator.isEmpty(data.company)) {
    errors.company = "Поле с названием компании не может быть пустым";
  }

  if (validator.isEmpty(data.from)) {
    errors.from = "Дата начала обязательна";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
