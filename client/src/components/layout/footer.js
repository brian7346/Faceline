import React from "react";
import classNames from "classnames";
import { ThemeContext } from "../../context/ThemeContext";

const Footer = () => {
  const { theme } = React.useContext(ThemeContext);

  let footerClassNames = classNames({
    "text-center": true,
    "p-4": true,
    "current-bg": !theme.darkMode,
    "dark-bg": theme.darkMode
  });
  return (
    <footer className={footerClassNames}>
      Copyright &copy; {new Date().getFullYear()} FeceLine
    </footer>
  );
};

export default Footer;
