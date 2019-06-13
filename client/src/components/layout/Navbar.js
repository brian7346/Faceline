import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm current-bg mb-4">
      <div className="container">
        <a className="navbar-brand" href="landing.html">
          FaceLife
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
