import React, { useState, useContext } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { CustomButton, CustomInput } from "../";
import { AuthContext } from "../../context/AuthContext";
import { ErrorContext } from "../../context/ErrorContext";
import { registerUserAction } from "../../actions/authActions";
const Register = withRouter(props => {
  let { auth, changleAuth } = useContext(AuthContext);
  let { errors, changeErrors } = useContext(ErrorContext);

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
              <div className="form-group">
                <CustomInput
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Имя"
                  name="name"
                  value={name}
                  onChange={handleName}
                  errors={errors}
                />
              </div>
              <div className="form-group">
                <CustomInput
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handleEmail}
                  errors={errors}
                />
                <small className="form-text text-muted">
                  Этот сайт использует Gravatar если вы хотите добавить
                  изображжение для профиля используйте email из Gravatar
                </small>
              </div>
              <div className="form-group">
                <CustomInput
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Пароль"
                  name="password"
                  value={password}
                  onChange={handlePassword}
                  errors={errors}
                />
              </div>
              <div className="form-group">
                <CustomInput
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Подтвердите пароль"
                  name="password2"
                  value={password2}
                  onChange={handlePassword2}
                  errors={errors}
                />
              </div>
              <CustomButton type="submit" marginTop />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Register;
