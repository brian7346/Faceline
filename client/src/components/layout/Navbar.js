import React, { useContext } from "react";

import { SwitchBtn, CustomLink } from "../";
import classNames from "classnames";
import { ThemeContext } from "../../context/ThemeContext";
import { AuthContext } from "../../context/AuthContext";
import { ProfileContext } from "../../context/ProfileContext";
import { logoutUserAction } from "../../actions/authActions";
import { clearCurrentProfileAction } from "../../actions/profileActions";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const { auth, changleAuth } = useContext(AuthContext);
  const { changeProfile } = useContext(ProfileContext);

  let navbarClassNames = classNames({
    navbar: true,
    "navbar-expand-md": true,
    "mb-4": false,
    "current-bg": !theme.darkMode,
    "dark-bg": theme.darkMode
  });

  const onLogoutClick = event => {
    event.preventDefault();
    changeProfile(clearCurrentProfileAction());
    logoutUserAction(changleAuth);
  };

  const authLinks = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item ">
        <CustomLink title="Лента" navLink padding to="feed" />
      </li>
      <li className="nav-item ">
        <CustomLink
          title="Управление аккаунтом"
          navLink
          padding
          to="dashboard"
        />
      </li>
      <li className="nav-item ">
        <a
          href=""
          onClick={onLogoutClick}
          className="nav-link d-flex justify-content-center"
        >
          <img
            className="rounded-circle"
            src={auth.user.avatar}
            alt={auth.user.avatar}
            style={{ width: 25, marginRight: 5, height: 25 }}
            title="Вы должны присоединить ваш аккаунт на Gravatar, чтобы увидеть аватар "
          />
          Выйти
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item ">
        <CustomLink title="Войти" navLink padding to="login" />
      </li>
    </ul>
  );

  return (
    <nav className={navbarClassNames}>
      <div className="container">
        <SwitchBtn />
        <CustomLink
          title="FaceLine"
          navBrand
          to={!auth.isAuthenticated ? "/" : "/dashboard"}
        />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mobile-nav"
        >
          <i className="fas fa-bars nav-icon-color" />
        </button>

        <div className="collapse navbar-collapse" id="mobile-nav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <CustomLink title="Пользователи" navLink to="profiles" />
            </li>
          </ul>

          {auth.isAuthenticated ? authLinks : guestLinks}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
