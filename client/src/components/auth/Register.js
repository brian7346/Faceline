import React from "react";
import { CustomButton } from "../";
const Register = () => {
  return (
    <div class="register min-height pt-4 pb-4">
      <div class="container">
        <div class="row">
          <div class="col-md-8 m-auto">
            <h1 class="display-4 text-center">Регистрация</h1>
            <p class="lead text-center">Создайте свой аккаунт на FaceLine</p>
            <form action="create-profile.html">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Имя"
                  name="name"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control form-control-lg"
                  placeholder="Ваш Email"
                  name="email"
                />
                <small className="form-text text-muted">
                  Этот сайт использует Gravatar если вы хотите добавить
                  изображжение для профиля используйте email из Gravatar
                </small>
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control form-control-lg"
                  placeholder="Пароль"
                  name="password"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control form-control-lg"
                  placeholder="Подтвердите пароль"
                  name="password2"
                />
              </div>
              <CustomButton marginTop />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
