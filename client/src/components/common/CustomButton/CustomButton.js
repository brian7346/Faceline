import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { ThemeContext } from "../../../context/ThemeContext";

import "./CustomButton.scss";

const CustomButton = props => {
  let { theme } = React.useContext(ThemeContext);

  let buttonClassNames = classNames({
    btn: true,
    "btn-block": true,
    "mt-4": props.marginTop,
    "dark-bg": theme.darkMode,
    "dark-bg-button": theme.darkMode,
    "current-bg": !theme.darkMode,
    "mr-2": props.marginRight
  });
  return <input type={props.type} className={buttonClassNames} />;
};

CustomButton.propTypes = {
  type: PropTypes.string,
  marginTop: PropTypes.bool,
  marginRight: PropTypes.bool
};

CustomButton.defaultProps = {
  type: "",
  marginTop: false,
  marginRight: false
};

export default CustomButton;
