import React, { useContext, useEffect } from "react";
import { Spinner } from "../";
import ProfileItem from "./ProfileItem";
import { getProfilesAction } from "../../actions/profileActions";
import { ProfileContext } from "../../context/ProfileContext";

const Profiles = () => {
  const { profile, changeProfile } = useContext(ProfileContext);
  const { profiles, loading } = profile;

  useEffect(() => {
    getProfilesAction(changeProfile);
  }, []);

  let profileItems;
  if (profiles === null || loading) {
    profileItems = <Spinner />;
  } else {
    if (profiles.length > 0) {
      profileItems = profiles.map(profile => (
        <ProfileItem key={profile._id} profile={profile} />
      ));
    } else {
      profileItems = <h4>Не найдено ни одного профиля...</h4>;
    }
  }
  return (
    <div className="profiles min-height pt-4 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-4 text-center">Профили пользователей</h1>
            <p className="lead text-center">
              Ищите и объединяйтесь с пользователями
            </p>
            {profileItems}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
