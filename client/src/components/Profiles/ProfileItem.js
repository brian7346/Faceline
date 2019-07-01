import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { CustomLink } from "../";
import { isEmpty } from "../../validation/is-empty";
import { ThemeContext } from "../../context/ThemeContext";

const ProfileItem = props => {
  const { theme } = React.useContext(ThemeContext);
  const { profile } = props;

  let profileCardClassNames = classNames({
    card: true,
    "card-body": true,
    "mb-3": true,
    "dark-bg": theme.darkMode
  });

  let skillItemClassNames = classNames({
    "list-group-item": true,
    "dark-bg": theme.darkMode,
    "white-border": theme.darkMode
  });

  return (
    <div className={profileCardClassNames}>
      <div className="row">
        <div className="col-2">
          <img
            src={profile.user.avatar}
            alt="аватар"
            className="rounded-circle"
          />
        </div>
        <div className="col-lg-6 col-md-4 col-8">
          <h3>{profile.user.name}</h3>
          <p>
            {profile.status !== "0" ? profile.status : null}
            {isEmpty(profile.company) ? null : (
              <span> в {profile.company}</span>
            )}
          </p>
          <p>
            {isEmpty(profile.location) ? null : <span>{profile.location}</span>}
          </p>
          <CustomLink
            to={`/profile/${profile.handle}`}
            title="Посмотреть профиль"
          />
        </div>
        <div className="col-md-4 d-none d-md-block">
          <h4>Навыки</h4>
          <ul className="list-group">
            {profile.skills.slice(0, 4).map((skill, index) => (
              <li key={index} className={skillItemClassNames}>
                <i className="fa fa-check pr-1" />
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
