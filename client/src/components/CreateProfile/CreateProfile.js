import React, { useState, useContext } from "react";
import { ErrorContext } from "../../context/ErrorContext";
import { ProfileContext } from "../../context/ProfileContext";
import { CustomInput } from "../";

const CreateProfile = () => {
  let { errors, changeErrors } = useContext(ErrorContext);
  let { profile, changeProfile } = useContext(ProfileContext);

  const [displaySocialInput, changeDisplaySocialInput] = useState(false);
  const [handle, changeHandle] = useState("");
  const [company, changeCompany] = useState("");
  const [website, changeWebsite] = useState("");
  const [location, changeLocation] = useState("");
  const [status, changeStatus] = useState("");
  const [skills, changeSkills] = useState("");
  const [githubusername, changeGithubusername] = useState("");
  const [bio, changeBio] = useState("");
  const [twitter, changeTwitter] = useState("");
  const [youtube, changeYoutube] = useState("");
  const [instagram, changeInstagram] = useState("");
  return (
    <div className="create-profile min-height min-height pt-4 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Создайте свой профиль</h1>
            <p className="lead text-center">
              Добавьте немного информации, чтобы создать свой профиль
            </p>
            <small className="d-block pb-3">* = обязательные поля</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
