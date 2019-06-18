const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Имя должно быть от 2-х до 30-ти символов";
  }

  if (validator.isEmpty(data.name)) {
    errors.name = "Поле с именем не может быть пустым";
  }

  if (validator.isEmpty(data.email)) {
    errors.email = "Поле с email не может быть пустым";
  }

  if (!validator.isEmail(data.email)) {
    errors.email = "Недопустимый email";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "Поле с паролем не может быть пустым";
  }

  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Пароль должен быть от 6-ти до 30-ти символов";
  }

  if (validator.isEmpty(data.password2)) {
    errors.password2 = "Вы не подтвердили пароль";
  }

  if (!validator.equals(data.password, data.password2)) {
    errors.password2 = "Пароли должны совпадать";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
