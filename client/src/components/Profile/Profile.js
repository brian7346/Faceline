import React, { useContext, useEffect } from "react";
import { ProfileContext } from "../../context/ProfileContext";
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

  useEffect(() => {
    if (props.match.params.handle) {
      getProfileByHandleAction(props.match.params.handle, changeProfile);
    }
  }, []);

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
        <ProfileAbout />
        <ProfileCreds />
        <ProfileGitHub />
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

export default Profile;
