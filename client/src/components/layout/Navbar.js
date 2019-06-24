import React, { useContext } from "react";

import { SwitchBtn, CustomLink } from "../";
import classNames from "classnames";
import { ThemeContext } from "../../context/ThemeContext";
import { AuthContext } from "../../context/AuthContext";
import { logoutUserAction } from "../../actions/authActions";

const Navbar = props => {
  let { theme } = useContext(ThemeContext);
  let { auth, changleAuth } = useContext(AuthContext);

  let navbarClassNames = classNames({
    navbar: true,
    "navbar-expand-sm": true,
    "mb-4": false,
    "current-bg": !theme.darkMode,
    "dark-bg": theme.darkMode
  });

  const onLogoutClick = event => {
    event.preventDefault();
    logoutUserAction(changleAuth);
  };
  const authLinks = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        {/* <CustomLink title="Выйти" navLink padding to="login" /> */}
        <a href="" onClick={onLogoutClick} className="nav-link">
          <img
            className="rounded-circle"
            src={auth.user.avatar}
            alt={auth.user.avatar}
            style={{ width: 25, marginRight: 5 }}
            title="Вы должны присоединить ваш аккаунт на Gravatar, чтобы увидеть аватар "
          />
          Выйти
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <CustomLink title="Войти" navLink padding to="login" />
      </li>
      <li className="nav-item">
        <CustomLink title="Зарегестрироваться" navLink to="register" />
      </li>
    </ul>
  );

  return (
    <nav className={navbarClassNames}>
      <div className="container">
        <CustomLink title="FaceLine" navBrand to="/" />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mobile-nav"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mobile-nav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <CustomLink title="Пользователи" navLink to="profiles" />
            </li>
          </ul>

          {auth.isAuthenticated ? authLinks : guestLinks}

          <SwitchBtn />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
