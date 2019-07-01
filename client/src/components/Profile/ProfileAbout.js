import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { isEmpty } from "../../validation/is-empty";

const ProfileAbout = props => {
  let cardClassNames = classNames({
    card: true,
    "card-body": true,
    "mb-3": true,
    "bg-light": !props.darkMode,
    "dark-bg": props.darkMode
  });
  const { profile } = props.profile;

  //Get first name
  //Получаем имя
  const firstname = profile.user.name.trim().split(" ")[0];

  //Skill list
  //Список навыков
  const skills = profile.skills.map((skill, index) => (
    <div key={index} className="p-3">
      <i className="fa fa-check" /> {skill}
    </div>
  ));
  return (
    <div className="row">
      <div className="col-md-12">
        <div className={cardClassNames}>
          <h3 className="text-center text-info">{firstname} о себе</h3>
          <p className="lead">
            {isEmpty(profile.bio) ? null : <span>{profile.bio}</span>}
          </p>
          <hr />
          <h3 className="text-center text-info">Навыки</h3>
          <div className="row">
            <div className="d-flex flex-wrap justify-content-center align-items-center">
              {skills}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
  darkMode: PropTypes.bool
};

export default ProfileAbout;
