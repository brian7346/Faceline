import React, { useContext, useEffect } from "react";
import { ProfileContext } from "../../context/ProfileContext";
import { AuthContext } from "../../context/AuthContext";
import { ErrorContext } from "../../context/ErrorContext";
import {
  getCurrentProfileAction,
  deleteAccountAction
} from "../../actions/profileActions";
import {
  Spinner,
  CustomLink,
  ProfileActions,
  CustomButton,
  Experience,
  Education
} from "../";

const Dashboard = () => {
  const { profile, changeProfile } = useContext(ProfileContext);
  const { auth, changleAuth } = useContext(AuthContext);
  const { changeErrors } = useContext(ErrorContext);

  let dashbordContent;

  const onDeleteClick = () => {
    deleteAccountAction(changleAuth);
  };

  useEffect(() => {
    getCurrentProfileAction(changeProfile, changeErrors);
  }, []);

  if (profile.profile === null || profile.loading) {
    dashbordContent = <Spinner />;
  } else {
    //Check if logged user has profile data
    //Проверяем, есть ли профиль у пользователя
    if (Object.keys(profile.profile).length > 0) {
      dashbordContent = (
        <>
          <p className="mb-3 lead text-muted">
            Добро пожаловать
            <CustomLink
              title={auth.user.name}
              to={`/profile/${profile.profile.handle}`}
              marginLeft
            />
          </p>
          <ProfileActions />
          <Experience experience={profile.profile.experience} />
          <Education education={profile.profile.education} />
          <CustomButton
            value="Удалить мой аккаунт"
            btnDanger
            marginTop
            type="button"
            onClick={onDeleteClick}
          />
        </>
      );
    } else {
      //User logged in, buth has no profile
      //Пользователь вошел, но у него нет профиля
      dashbordContent = (
        <>
          <p className="lead text-muted">Добро пожаловать {auth.user.name}</p>
          <p>
            Вы еще не заполнили свой профиль, пожалуйста, добавьте немного
            информации о себе
          </p>
          <CustomLink title="Создать профиль" large to="/create-profile" />
        </>
      );
    }
  }
  return (
    <div className="dashboard min-height pt-4 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-4">Управление аккаунтом</h1>
            {dashbordContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
