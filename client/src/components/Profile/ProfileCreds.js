import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";
import classNames from "classnames";

const ProfileCreds = props => {
  const { experience, education, darkMode } = props;
  let liClassNames = classNames({
    "list-group-item": true,
    "dark-bg": darkMode,
    "white-border": darkMode
  });
  const expItems = experience.map(exp => (
    <li key={exp._id} className={liClassNames}>
      <h4>{exp.company}</h4>
      <p>
        <Moment format="DD.MM.YYYY">{exp.from}</Moment> -
        {exp.to === null ? (
          " Текущее место"
        ) : (
          <Moment format="DD.MM.YYYY">{exp.to}</Moment>
        )}
      </p>
      <p>
        <strong>Позиция: </strong> {exp.title}
      </p>
      <p>
        {exp.location === "" ? null : (
          <span>
            <strong>Местоположение: </strong>
            {exp.location}
          </span>
        )}
      </p>
      <p>
        {exp.description === "" ? null : (
          <span>
            <strong>Описание: </strong>
            {exp.description}
          </span>
        )}
      </p>
    </li>
  ));

  const eduItems = education.map(edu => (
    <li key={edu._id} className={liClassNames}>
      <h4>{edu.school}</h4>
      <p>
        <Moment format="DD.MM.YYYY">{edu.from}</Moment> -
        {edu.to === null ? (
          " Текущее место"
        ) : (
          <Moment format="DD.MM.YYYY">{edu.to}</Moment>
        )}
      </p>
      <p>
        <strong>Образование: </strong> {edu.degree}
      </p>
      <p>
        <strong>Специализация: </strong> {edu.fieldofstudy}
      </p>
      <p>
        {edu.description === "" ? null : (
          <span>
            <strong>Описание: </strong>
            {edu.description}
          </span>
        )}
      </p>
    </li>
  ));
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="text-center text-info">Опыт</div>
        {expItems.length > 0 ? (
          <ul className="list-group">{expItems}</ul>
        ) : (
          <p className="text-center">Опыт не указан</p>
        )}
      </div>
      <div className="col-md-6">
        <div className="text-center text-info">Образование</div>
        {eduItems.length > 0 ? (
          <ul className="list-group">{eduItems}</ul>
        ) : (
          <p className="text-center">Образование не указано</p>
        )}{" "}
      </div>
    </div>
  );
};

ProfileCreds.propTypes = {
  education: PropTypes.array.isRequired,
  experience: PropTypes.array.isRequired
};
export default ProfileCreds;
