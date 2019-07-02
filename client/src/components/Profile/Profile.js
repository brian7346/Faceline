import React, { useContext, useEffect } from "react";
import { ProfileContext } from "../../context/ProfileContext";
import { withRouter } from "react-router-dom";
import { Spinner, CustomLink } from "../";
import ProfileHeader from "./ProfileHeader";
import ProfileAbout from "./ProfileAbout";
import ProfileCreds from "./ProfileCreds";
import ProfileGitHub from "./ProfileGitHub";
import { getProfileByHandleAction } from "../../actions/profileActions";
import { ThemeContext } from "../../context/ThemeContext";

const Profile = props => {
  const { profile, changeProfile } = useContext(ProfileContext);
  const { theme } = useContext(ThemeContext);
  const { myProfile } = profile;

  useEffect(() => {
    if (props.match.params.handle) {
      getProfileByHandleAction(props.match.params.handle, changeProfile);
    }
  }, []);

  useEffect(() => {
    if (myProfile === null && profile.loading) {
      props.history.push("/not-found");
    }
  });

  let profileContent;
  if (profile.profile === null || profile.loading) {
    profileContent = <Spinner />;
  } else {
    profileContent = (
      <>
        <div className="row">
          <div className="col-md-6">
            <CustomLink
              to="/profiles"
              btnLight
              marginBottom
              title="Все профили"
            />
          </div>
          <div className="col-md-6" />
        </div>
        <ProfileHeader profile={profile} darkMode={theme.darkMode} />
        <ProfileAbout profile={profile} darkMode={theme.darkMode} />
        <ProfileCreds
          education={profile.profile.education}
          experience={profile.profile.experience}
          darkMode={theme.darkMode}
        />
        {profile.profile.githubusername ? (
          <ProfileGitHub
            username={profile.profile.githubusername}
            darkMode={theme.darkMode}
          />
        ) : null}
      </>
    );
  }

  return (
    <div className="profile min-height pt-4 pb-4">
      <div className="row">
        <div className="col-md-12">{profileContent}</div>
      </div>
    </div>
  );
};

export default withRouter(Profile);
