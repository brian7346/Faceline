import React, { useContext, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { setAuthToken } from "./utils/setAuthToken";
import { setCurrentUser, logoutUserAction } from "../src/actions/authActions";
import { clearCurrentProfileAction } from "../src/actions/profileActions";

import "./styles/App.scss";
import {
  Navbar,
  Landing,
  Footer,
  Register,
  Login,
  AppWrapper,
  Dashboard,
  PrivateRoute,
  CreateProfile,
  EditProfile,
  AddExperience,
  AddEducation,
  Profiles,
  Profile,
  NotFound,
  Posts,
  Post
} from "./components";
import { AuthContext } from "./context/AuthContext";
import { ErrorProvider } from "./context/ErrorContext";
import { ProfileContext } from "./context/ProfileContext";
import { ThemeContext } from "./context/ThemeContext";
import { PostProvider } from "./context/PostContext";
import { changeThemeAction } from "./actions/themeActions";

const App = () => {
  const { changleAuth } = useContext(AuthContext);
  const { changeProfile } = useContext(ProfileContext);
  const { changeTheme } = useContext(ThemeContext);

  //Check for token
  //Проверяем наличие токена
  useEffect(() => {
    if (localStorage.jwtToken) {
      setAuthToken(localStorage.jwtToken);

      const decoded = jwt_decode(localStorage.jwtToken);
      changleAuth(setCurrentUser(decoded));

      //Check for expired token
      //Проверяем не истекло ли время токена
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        //Logout user
        //Выходим из аккаунта
        logoutUserAction(changleAuth);

        //Clear current profile
        changeProfile(clearCurrentProfileAction());
        //Redirect to login
        window.location.href = "/login";
      }
    }

    if (JSON.parse(localStorage.getItem("darkMode"))) {
      changeTheme(changeThemeAction());
    }
  }, [changeProfile, changeTheme, changleAuth]);

  return (
    <AppWrapper>
      <Navbar />
      <Route exact path="/" component={Landing} />
      <div className="container">
        <ErrorProvider>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profiles" component={Profiles} />
          <Route exact path="/profile/:handle" component={Profile} />
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
          <Switch>
            <PrivateRoute
              exact
              path="/create-profile"
              component={CreateProfile}
            />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/edit-profile" component={EditProfile} />
          </Switch>
          <Switch>
            <PrivateRoute
              exact
              path="/add-experience"
              component={AddExperience}
            />
          </Switch>
          <Switch>
            <PrivateRoute
              exact
              path="/add-education"
              component={AddEducation}
            />
          </Switch>
          <PostProvider>
            <Switch>
              <PrivateRoute exact path="/feed" component={Posts} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/post/:id" component={Post} />
            </Switch>
          </PostProvider>
          <Route exact path="/not-found" component={NotFound} />
        </ErrorProvider>
      </div>
      <Footer />
    </AppWrapper>
  );
};

export default App;
