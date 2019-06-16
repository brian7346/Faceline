import React from "react";

import { SwitchBtn, CustomLink } from "../";
import classNames from "classnames";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = props => {
  let { state, dispatch } = React.useContext(ThemeContext);

  let navbarClassNames = classNames({
    navbar: true,
    "navbar-expand-sm": true,
    "mb-4": true,
    "current-bg": !state.darkMode,
    "dark-bg": state.darkMode
  });
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

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <CustomLink title="Войти" navLink padding to="login" />
            </li>
            <li className="nav-item">
              <CustomLink title="Зарегестрироваться" navLink to="register" />
            </li>
          </ul>

          <SwitchBtn />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
