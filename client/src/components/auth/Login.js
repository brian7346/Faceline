import React, { useState, useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ErrorContext } from "../../context/ErrorContext";
import { CustomButton, CustomInput } from "../";
import { loginUserAction } from "../../actions/authActions";

const Login = props => {
  const { auth, changleAuth } = useContext(AuthContext);
  const { errors, changeErrors } = useContext(ErrorContext);

  const [email, changeEmail] = useState("");
  const [password, changePassword] = useState("");

  const handleEmail = event => changeEmail(event.target.value);
  const handlePassword = event => changePassword(event.target.value);
  const onSubmit = event => {
    event.preventDefault();

    const user = {
      email,
      password
    };

    loginUserAction(user, changleAuth, changeErrors);
  };

  useEffect(() => {
    if (auth.isAuthenticated) {
      props.history.push("/dashboard");
    }
  });
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
              <CustomInput
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleEmail}
                errors={errors}
              />
              <CustomInput
                type="password"
                placeholder="Пароль"
                name="password"
                value={password}
                onChange={handlePassword}
                errors={errors}
              />
              <CustomButton type="submit" value="Войти" marginTop btnBlock />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
