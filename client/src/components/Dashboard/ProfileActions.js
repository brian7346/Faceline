import React from "react";
import { Link } from "react-router-dom";

const ProfileActions = () => {
  return (
    <div className="btn-group mb-4" role="group">
      <Link to="edit-profile" className="btn btn-light">
        <i className="fas fa-user-circle mr-1" /> Редактировать Профиль
      </Link>
      <Link to="add-experience" className="btn btn-light">
        <i className="fab fa-black-tie mr-1" />
        Добавить Опыт
      </Link>
      <Link to="add-education" className="btn btn-light">
        <i className="fas fa-graduation-cap mr-1" />
        Добавить Образование
      </Link>
    </div>
  );
};

export default ProfileActions;
