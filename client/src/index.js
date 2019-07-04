import React from "react";
import ReactDOM from "react-dom";
import { AuthProvider } from "./context/AuthContext";
import { ProfileProvider } from "./context/ProfileContext";
import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <AuthProvider>
    <ProfileProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ProfileProvider>
  </AuthProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
