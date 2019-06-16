import React from "react";
import "./Link.scss";
import classNames from "classnames";
import { ThemeContext } from "../../context/ThemeContext";

const Link = props => {
  let { state, dispatch } = React.useContext(ThemeContext);

  let className = classNames({
    btn: true,
    "btn-lg": props.large,
    "dark-bg": state.darkMode && !props.btnLight,
    "current-bg": !state.darkMode && !props.btnLight,
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
