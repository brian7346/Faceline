import React, { useState, useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { ErrorContext } from "../../context/ErrorContext";
import { ProfileContext } from "../../context/ProfileContext";
import {
  CustomInput,
  SelectListGroup,
  CustomTextArea,
  InputGroup,
  CustomButton,
  CustomLink
} from "..";
import {
  createProfileAction,
  getCurrentProfileAction
} from "../../actions/profileActions";
import { isEmpty } from "../../validation/is-empty";
import { GET_ERRORS } from "../../actions/types";

const EditProfile = props => {
  const { errors, changeErrors } = useContext(ErrorContext);
  const { profile, changeProfile } = useContext(ProfileContext);

  const [displaySocialInput, changeDisplaySocialInput] = useState(false);
  const [profileHandle, changeProfileHandle] = useState("");
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

  const handleDisplaySocials = () =>
    changeDisplaySocialInput(!displaySocialInput);

  const handleProfileHandle = event => changeProfileHandle(event.target.value);
  const handleStatus = event => changeStatus(event.target.value);
  const handleCompany = event => changeCompany(event.target.value);
  const handleWebsite = event => changeWebsite(event.target.value);
  const handleLocation = event => changeLocation(event.target.value);
  const handleSkills = event => changeSkills(event.target.value);
  const handleGithub = event => changeGithubusername(event.target.value);
  const handleBio = event => changeBio(event.target.value);
  const handleTwitter = event => changeTwitter(event.target.value);
  const handleYoutube = event => changeYoutube(event.target.value);
  const handleInstagram = event => changeInstagram(event.target.value);

  const onSubmit = event => {
    event.preventDefault();

    const profileData = {
      handle: profileHandle,
      company,
      website,
      location,
      status,
      skills,
      githubusername,
      bio,
      twitter,
      youtube,
      instagram
    };
    createProfileAction(profileData, props.history, changeErrors);
  };

  useEffect(() => {
    getCurrentProfileAction(changeProfile);
    return () => {
      changeErrors({
        type: GET_ERRORS,
        payload: {}
      });
    };
  }, []);

  useEffect(() => {
    if (profile.profile) {
      const myProfile = profile.profile;

      // Bring skills array back to CSV
      // Разделяем массив на значения с запятыми
      const skillsCSV = myProfile.skills.join(",");

      //If profile field doesnt exist, make empty string
      //Проверяем, заполнено ли поле в профиле
      myProfile.company = !isEmpty(myProfile.company) ? myProfile.company : "";
      myProfile.website = !isEmpty(myProfile.website) ? myProfile.website : "";
      myProfile.location = !isEmpty(myProfile.location)
        ? myProfile.location
        : "";
      myProfile.githubusername = !isEmpty(myProfile.githubusername)
        ? myProfile.githubusername
        : "";
      myProfile.bio = !isEmpty(myProfile.bio) ? myProfile.bio : "";
      myProfile.social = !isEmpty(myProfile.social) ? myProfile.social : {};
      myProfile.twitter = !isEmpty(myProfile.social.twitter)
        ? myProfile.social.twitter
        : "";
      myProfile.youtube = !isEmpty(myProfile.social.youtube)
        ? myProfile.social.youtube
        : "";
      myProfile.instagram = !isEmpty(myProfile.social.instagram)
        ? myProfile.social.instagram
        : "";

      // Set component fields state
      // Заполняем state
      changeProfileHandle(myProfile.handle);
      changeCompany(myProfile.company);
      changeWebsite(myProfile.website);
      changeLocation(myProfile.location);
      changeStatus(myProfile.status);
      changeSkills(skillsCSV);
      changeGithubusername(myProfile.githubusername);
      changeBio(myProfile.bio);
      changeTwitter(myProfile.twitter);
      changeYoutube(myProfile.youtube);
      changeInstagram(myProfile.instagram);
    }
  }, []);

  // Select options for status
  // Варианты выбора для поля Статус
  const options = [
    {
      label: "Выберете Профессиональный Статус",
      value: 0
    },
    {
      label: "Разработчик",
      value: "Разработчик"
    },
    {
      label: "Менеджер",
      value: "Менеджер"
    },
    {
      label: "Студент",
      value: "Студент"
    },
    {
      label: "Учитель или Наставник",
      value: "Учитель"
    },
    {
      label: "Другое",
      value: "Другое"
    }
  ];

  let socialInputs;

  if (displaySocialInput) {
    socialInputs = (
      <>
        <InputGroup
          placeholder="Ссылка на профиль в Twitter"
          name="twitter"
          icon="fab fa-twitter"
          value={twitter}
          onChange={handleTwitter}
          errors={errors}
        />
        <InputGroup
          placeholder="Ссылка на канал YouTube"
          name="youtube"
          icon="fab fa-youtube"
          value={youtube}
          onChange={handleYoutube}
          errors={errors}
        />
        <InputGroup
          placeholder="Ссылка на профиль в Instagram"
          name="instagram"
          icon="fab fa-instagram"
          value={instagram}
          onChange={handleInstagram}
          errors={errors}
        />
      </>
    );
  }
  return (
    <div className="create-profile min-height pt-4 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <CustomLink to="/dashboard" btnLight title="Назад" />

            <h1 className="display-4 text-center">Редактирование профиля</h1>
            <small className="d-block pb-3">* = обязательные поля</small>
            <form onSubmit={onSubmit}>
              <CustomInput
                placeholder="Логин профиля"
                name="handle"
                value={profileHandle}
                onChange={handleProfileHandle}
                errors={errors}
                info="Уникальный логин для вашей ссылки на профиль(URL). Ваше полное имя, название компании, никнейм, и т.д."
              />
              <SelectListGroup
                placeholder="Статус"
                name="status"
                value={status}
                options={options}
                onChange={handleStatus}
                errors={errors}
                info="Расскажите нам, каков ваш статус на данный момент"
              />
              <CustomInput
                placeholder="Организация/Компания"
                name="company"
                value={company}
                onChange={handleCompany}
                errors={errors}
                info="Это может быть либо ваша компания, либо компания в которой вы работайте"
              />
              <CustomInput
                placeholder="Веб сайт"
                name="website"
                value={website}
                onChange={handleWebsite}
                errors={errors}
                info="Это может быть либо ваш сайт, либо сайт компании, в которой вы работайте"
              />
              <CustomInput
                placeholder="Местоположение"
                name="location"
                value={location}
                onChange={handleLocation}
                errors={errors}
                info="Город или область (например: Лос-Анжелес)"
              />
              <CustomInput
                placeholder="Навыки/Хобби"
                name="skills"
                value={skills}
                onChange={handleSkills}
                errors={errors}
                info="Пожалуйста, разделяйте навыки запятыми (например: Футбол, Программирование, CS:GO)"
              />
              <CustomInput
                placeholder="Ваш GitGub"
                name="githubusername"
                value={githubusername}
                onChange={handleGithub}
                errors={errors}
                info="Если вы программист вы можете указать имя вашего профиля на github"
              />
              <CustomTextArea
                placeholder="О себе"
                name="bio"
                value={bio}
                onChange={handleBio}
                errors={errors}
                info="Расскажите немного о себе"
              />

              <CustomButton
                type="button"
                marginBottom
                btnLight
                value="Добавить соц. сети"
                onClick={handleDisplaySocials}
                tip="Не обязательно"
                marginRight
              />
              {socialInputs}
              <CustomButton
                type="submit"
                marginBottom
                value="Обновить"
                btnBlock
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(EditProfile);
