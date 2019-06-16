import React from "react";
import classNames from "classnames";
import { ThemeContext } from "../../context/ThemeContext";

const Footer = props => {
  let { state, dispatch } = React.useContext(ThemeContext);

  let footerClassNames = classNames({
    "text-center": true,
    "p-4": true,
    "mt-5": true,
    "current-bg": !state.darkMode,
    "dark-bg": state.darkMode
  });
  return (
    <footer className={footerClassNames}>
      Copyright &copy; {new Date().getFullYear()} FeceLine
    </footer>
  );
};

export default Footer;
