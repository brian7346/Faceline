import React from "react";
import SwitchBtn from "../SwitchBtn/SwitchBtn";
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
        <a className="navbar-brand" href="landing.html">
          FaceLine
        </a>
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
              <a className="nav-link" href="profiles.html">
                {" "}
                Разработчики
              </a>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link p4" href="login.html">
                Войти
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="register.html">
                Зарегестрироваться
              </a>
            </li>
          </ul>

          <SwitchBtn />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
