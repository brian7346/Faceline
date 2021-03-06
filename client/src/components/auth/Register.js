import React, { useState, useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { CustomButton, CustomInput } from "../";
import { ErrorContext } from "../../context/ErrorContext";
import { AuthContext } from "../../context/AuthContext";
import { registerUserAction } from "../../actions/authActions";

const Register = props => {
  const { errors, changeErrors } = useContext(ErrorContext);
  const { auth } = useContext(AuthContext);

  const [name, changeName] = useState("");
  const [email, changeEmail] = useState("");
  const [password, changePassword] = useState("");
  const [password2, changePassword2] = useState("");

  const handleName = event => changeName(event.target.value);
  const handleEmail = event => changeEmail(event.target.value);
  const handlePassword = event => changePassword(event.target.value);
  const handlePassword2 = event => changePassword2(event.target.value);

  const onSubmit = event => {
    event.preventDefault();

    const newUser = {
      name,
      email,
      password,
      password2
    };

    registerUserAction(newUser, changeErrors, props.history);
  };

  useEffect(() => {
    if (auth.isAuthenticated) {
      props.history.push("/dashboard");
    }
  }, [auth.isAuthenticated]);
  return (
    <div className="register min-height pt-4 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Регистрация</h1>
            <p className="lead text-center">
              Создайте свой аккаунт на FaceLine
            </p>
            <form noValidate onSubmit={onSubmit}>
              <CustomInput
                type="text"
                className="form-control form-control-lg"
                placeholder="Имя"
                name="name"
                value={name}
                onChange={handleName}
                errors={errors}
              />
              <CustomInput
                type="email"
                className="form-control form-control-lg"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleEmail}
                errors={errors}
                info="Этот сайт использует Gravatar если вы хотите добавить
                  изображение для профиля используйте email из Gravatar"
              />
              <CustomInput
                type="password"
                className="form-control form-control-lg"
                placeholder="Пароль"
                name="password"
                value={password}
                onChange={handlePassword}
                errors={errors}
              />
              <CustomInput
                type="password"
                className="form-control form-control-lg"
                placeholder="Подтвердите пароль"
                name="password2"
                value={password2}
                onChange={handlePassword2}
                errors={errors}
              />
              <CustomButton
                type="submit"
                value="Зарегестрироваться"
                marginTop
                btnBlock
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Register);
