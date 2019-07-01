import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { ThemeContext } from "../../context/ThemeContext";

const ProfileActions = () => {
  const { theme } = useContext(ThemeContext);

  let linkClassNames = classNames({
    btn: true,
    "btn-light": !theme.darkMode,
    "dark-bg": theme.darkMode,
    "white-border": theme.darkMode
  });
  return (
    <div className="btn-group mb-4" role="group">
      <Link to="edit-profile" className={linkClassNames}>
        <i className="fas fa-user-circle mr-1" /> Редактировать Профиль
      </Link>
      <Link to="add-experience" className={linkClassNames}>
        <i className="fab fa-black-tie mr-1" />
        Добавить Опыт
      </Link>
      <Link to="add-education" className={linkClassNames}>
        <i className="fas fa-graduation-cap mr-1" />
        Добавить Образование
      </Link>
    </div>
  );
};

export default ProfileActions;
