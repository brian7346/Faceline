const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";

  if (!validator.isLength(data.text, { min: 5, max: 300 })) {
    errors.text = "Пост должен быть не короче 5 и не длиннее 300 символов";
  }

  if (validator.isEmpty(data.text)) {
    errors.text = "Поле с текстом не может быть пустым";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
