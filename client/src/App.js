import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/App.scss";
import {
  Navbar,
  Landing,
  Footer,
  Register,
  Login,
  AppWrapper
} from "./components";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import { ErrorProvider } from "./context/ErrorContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppWrapper>
          <AuthProvider>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <ErrorProvider>
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </ErrorProvider>
            </div>
            <Footer />
          </AuthProvider>
        </AppWrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
