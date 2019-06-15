import React from "react";
import { Link } from "../";

const Landing = () => {
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
              <Link title="Зарегистрироваться" marginRight large />
              <Link title="Войти" marginRight large btnLight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
