import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
  EditProfile
} from "./components";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthContext } from "./context/AuthContext";
import { ErrorProvider } from "./context/ErrorContext";
import { ProfileContext } from "./context/ProfileContext";

const App = () => {
  const { auth, changleAuth } = useContext(AuthContext);
  const { changeProfile } = useContext(ProfileContext);

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
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <AppWrapper>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <ErrorProvider>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
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
                <PrivateRoute
                  exact
                  path="/edit-profile"
                  component={EditProfile}
                />
              </Switch>
            </ErrorProvider>
          </div>
          <Footer />
        </AppWrapper>
      </Router>
    </ThemeProvider>
  );
};

export default App;
