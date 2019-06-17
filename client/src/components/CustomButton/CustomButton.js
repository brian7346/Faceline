import React from "react";
import classNames from "classnames";
import { ThemeContext } from "../../context/ThemeContext";
import "./CustomButton.scss";

const CustomButton = props => {
  let { state, dispatch } = React.useContext(ThemeContext);

  let buttonClassNames = classNames({
    btn: true,
    "btn-block": true,
    "mt-4": props.marginTop,
    "dark-bg": state.darkMode,
    "dark-bg-button": state.darkMode,
    "current-bg": !state.darkMode,
    "mr-2": props.marginRight
  });
  return <input type="submit" class={buttonClassNames} />;
};

export default CustomButton;
