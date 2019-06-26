import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { ThemeContext } from "../../../context/ThemeContext";

import "./CustomButton.scss";

const CustomButton = props => {
  let { theme } = React.useContext(ThemeContext);

  let buttonClassNames = classNames({
    btn: true,
    "btn-block": props.btnBlock,
    "mt-4": props.marginTop,
    "dark-bg": theme.darkMode,
    "dark-bg-button": theme.darkMode,
    "btn-light": props.btnLight && !theme.darkMode,
    "current-bg": !theme.darkMode && !props.btnLight,
    "mr-2": props.marginRight,
    "mb-3": props.marginBottom
  });
  return (
    <div>
      <input
        type={props.type}
        className={buttonClassNames}
        value={props.value}
        onClick={props.onClick}
      />
      {props.tip && <small className="text-muted">{props.tip}</small>}
    </div>
  );
};

CustomButton.propTypes = {
  type: PropTypes.string,
  tvalueype: PropTypes.string,
  marginTop: PropTypes.bool,
  marginRight: PropTypes.bool,
  marginBottom: PropTypes.bool,
  onClick: PropTypes.func
};

CustomButton.defaultProps = {
  value: "Отправить",
  type: "",
  onClick: () => null
};

export default CustomButton;
