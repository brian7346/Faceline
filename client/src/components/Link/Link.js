import React from "react";
import "./Link.scss";
import classNames from "classnames";

const Link = props => {
  let className = classNames({
    btn: true,
    "btn-lg": props.large,
    "dark-bg": props.darkMode,
    "current-bg": !props.darkMode && !props.btnLight,
    "mr-2": props.marginRight,
    "btn-light": props.btnLight
  });
  return (
    <a href="register.html" className={className}>
      {props.title}
    </a>
  );
};

export default Link;
