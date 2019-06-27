import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { ThemeContext } from "../../../context/ThemeContext";

import "./CustomButton.scss";

const CustomButton = props => {
  const { theme } = React.useContext(ThemeContext);

  let buttonClassNames = classNames({
    btn: true,
    "btn-block": props.btnBlock,
    "dark-bg": theme.darkMode && !props.btnDanger,
    "dark-bg-button": theme.darkMode,
    "btn-light": props.btnLight && !theme.darkMode,
    "current-bg": !theme.darkMode && !props.btnLight && !props.btnDanger,
    "btn-danger": props.btnDanger,
    "mt-4": props.marginTop,
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
  value: PropTypes.string,
  marginTop: PropTypes.bool,
  marginRight: PropTypes.bool,
  marginBottom: PropTypes.bool,
  onClick: PropTypes.func,
  btnDanger: PropTypes.bool
};

CustomButton.defaultProps = {
  value: "Отправить",
  type: "",
  onClick: () => null
};

export default CustomButton;
