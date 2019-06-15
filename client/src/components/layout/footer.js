import React from "react";
import classNames from "classnames";

const Footer = props => {
  let footerClassNames = classNames({
    "text-center": true,
    "p-4": true,
    "mt-5": true,
    "current-bg": !props.darkMode,
    "dark-bg": props.darkMode
  });
  return (
    <footer className={footerClassNames}>
      Copyright &copy; {new Date().getFullYear()} FeceLine
    </footer>
  );
};

export default Footer;
