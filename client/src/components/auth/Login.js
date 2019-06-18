import React, { useState } from "react";
// import classNames from "classnames";
// import { ThemeContext } from "../../context/ThemeContext";
import { CustomButton, CustomInput } from "../";

const Login = () => {
  const [email, changeEmail] = useState("");
  const [password, changePassword] = useState("");
  const [errors, changeErrors] = useState({});

  const handleEmail = event => changeEmail(event.target.value);
  const handlePassword = event => changePassword(event.target.value);
  const onSubmit = event => {
    event.preventDefault();

    const user = {
      email,
      password
    };

    console.log(user);
  };
  return (
    <div className="login min-height pt-4 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Вход</h1>
            <p className="lead text-center">
              Войдите в ваш аккаунт на FaceLine
            </p>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <CustomInput
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handleEmail}
                />
              </div>
              <div className="form-group">
                <CustomInput
                  type="password"
                  placeholder="Пароль"
                  name="password"
                  value={password}
                  onChange={handlePassword}
                />
              </div>
              <CustomButton type="submit" marginTop />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
