import React, { useContext, useEffect } from "react";
import { ProfileContext } from "../../context/ProfileContext";
import { AuthContext } from "../../context/AuthContext";
import { ErrorContext } from "../../context/ErrorContext";
import {
  getCurrentProfileAction,
  deleteAccountAction
} from "../../actions/profileActions";
import { Spinner, CustomLink, ProfileActions, CustomButton } from "../";

const Dashboard = () => {
  let { profile, changeProfile } = useContext(ProfileContext);
  let { auth, changleAuth } = useContext(AuthContext);
  let { errors, changeErrors } = useContext(ErrorContext);

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
        <div>
          <p className="lead text-muted">
            Добро пожаловать
            <CustomLink
              title={auth.user.name}
              to={`/profile/${profile.profile.handle}`}
              marginLeft
            />
          </p>
          <ProfileActions />
          {/* TODO: exp and edu*/}
          <CustomButton
            value="Удалить мой аккаунт"
            btnDanger
            marginTop
            type="button"
            onClick={onDeleteClick}
          />
        </div>
      );
    } else {
      //User logged in, buth has no profile
      //Пользователь вошел, но у него нет профиля
      dashbordContent = (
        <div>
          <p className="lead text-muted">Добро пожаловать {auth.user.name}</p>
          <p>
            Вы еще не заполнили свой профиль, пожалуйста, добавьте немного
            информации о себе
          </p>
          <CustomLink title="Создать профиль" large to="create-profile" />
        </div>
      );
    }
  }
  return (
    <div className="dashboard min-height pt-4 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-4">Панель</h1>
            {dashbordContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
