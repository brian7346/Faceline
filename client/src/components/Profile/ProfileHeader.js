import React from "react";
import { isEmpty } from "../../validation/is-empty";
import PropTypes from "prop-types";
import classNames from "classnames";

const ProfileHeader = props => {
  let cardClassNames = classNames({
    card: true,
    "card-body": true,
    "text-white": true,
    "mb-3": true,
    "bg-info": !props.darkMode,
    "dark-bg": props.darkMode
  });
  const { profile } = props.profile;
  return (
    <div className="row">
      <div className="col-md-12">
        <div className={cardClassNames}>
          <div className="row">
            <div className="col-4 col-md-3 m-auto">
              <img
                className="rounded-circle"
                src={profile.user.avatar}
                alt=""
              />
            </div>
          </div>
          <div className="text-center">
            <h1 className="display-4 text-center">{profile.user.name}</h1>
            <p className="lead text-center">
              {profile.status !== "0" && profile.status}{" "}
              {isEmpty(profile.company) ? null : (
                <span> в {profile.company}</span>
              )}
            </p>
            {isEmpty(profile.location) ? null : <p>{profile.location}</p>}
            <p>
              {isEmpty(profile.website) ? null : (
                <a
                  className="text-white p-2"
                  href={profile.website}
                  target="_blank"
                >
                  <i className="fas fa-globe fa-2x" />
                </a>
              )}
              {isEmpty(profile.social && profile.social.twitter) ? null : (
                <a
                  className="text-white p-2"
                  href={profile.social.twitter}
                  target="_blank"
                >
                  <i className="fab fa-twitter fa-2x" />
                </a>
              )}
              {isEmpty(profile.social && profile.social.instagram) ? null : (
                <a
                  className="text-white p-2"
                  href={profile.social.instagram}
                  target="_blank"
                >
                  <i className="fab fa-instagram fa-2x" />
                </a>
              )}
              {isEmpty(profile.social && profile.social.youtube) ? null : (
                <a
                  className="text-white p-2"
                  href={profile.social.youtube}
                  target="_blank"
                >
                  <i className="fab fa-youtube fa-2x" />
                </a>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileHeader.propTypes = {
  profile: PropTypes.object.isRequired,
  darkMode: PropTypes.bool
};

export default ProfileHeader;
