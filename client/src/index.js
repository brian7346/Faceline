import React from "react";
import ReactDOM from "react-dom";
import { AuthProvider } from "./context/AuthContext";
import { ProfileProvider } from "./context/ProfileContext";
import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <AuthProvider>
      <ProfileProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ProfileProvider>
    </AuthProvider>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
