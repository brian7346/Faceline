const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateEducationInput(data) {
  let errors = {};

  data.school = !isEmpty(data.school) ? data.school : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  if (validator.isEmpty(data.school)) {
    errors.school = "Поле с названием школы не может быть пустым";
  }

  if (validator.isEmpty(data.degree)) {
    errors.degree = "Поле с вашим образованием не может быть пустым";
  }

  if (validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "Поле с fieldofstudy не может быть пустым";
  }

  if (validator.isEmpty(data.from)) {
    errors.from = "Дата начала обязательна";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
