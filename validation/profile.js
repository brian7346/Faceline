const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : "";
  data.status = !isEmpty(data.status) ? data.status : "";
  data.skills = !isEmpty(data.skills) ? data.skills : "";

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = "Hadle needs to between 2 or 4 characters";
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = "Логин для профиля обязателен";
  }

  if (Validator.isEmpty(data.status)) {
    errors.status = "Поле Статус не может быть пустым";
  }

  if (Validator.isEmpty(data.skills)) {
    errors.skills = "Поле Навыки не может быть пустым";
  }

  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = "Не верный URL";
    }
  }

  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = "Не верный URL";
    }
  }
  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = "Не верный URL";
    }
  }
  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = "Не верный URL";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
