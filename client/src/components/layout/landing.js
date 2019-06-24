import React, { useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import { CustomLink } from "../";
import { AuthContext } from "../../context/AuthContext";

const Landing = withRouter(props => {
  let { auth } = useContext(AuthContext);
  useEffect(() => {
    if (auth.isAuthenticated) {
      props.history.push("/dashboard");
    }
  }, [auth.isAuthenticated, props.history]);
  return (
    <div className="landing">
      <div className="dark-overlay landing-inner text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-3 mb-4">FaceLine для Вас</h1>
              <p className="lead">
                {" "}
                Создавайте профиль/портфолио, делитесь постами и получайте
                помощь от других учасников
              </p>
              <hr />
              <CustomLink
                title="Зарегистрироваться"
                marginRight
                large
                to="register"
              />
              <CustomLink title="Войти" marginRight large btnLight to="login" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Landing;
