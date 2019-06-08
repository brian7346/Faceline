const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (validator.isEmpty(data.email)) {
    errors.email = "Поле с email не может быть пустым";
  }

  if (!validator.isEmail(data.email)) {
    errors.email = "Недопустимый email";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "Поле с паролем не может быть пустым";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
