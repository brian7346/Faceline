import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const CustomInput = props => {
  let inputClassNames = classNames({
    "form-control ": true,
    "form-control-lg": true,
    "is-invalid": props.errors[props.name]
  });

  return (
    <div className="form-group">
      <input
        type={props.type}
        className={inputClassNames}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
      />

      {props.info && (
        <small className="form-text text-muted">{props.info}</small>
      )}
      {props.errors[props.name] && (
        <div className="invalid-feedback">{props.errors[props.name]}</div>
      )}
    </div>
  );
};

CustomInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
  disabled: PropTypes.bool,
  info: PropTypes.string
};

CustomInput.defaultProps = {
  type: "text",
  errors: {}
};

export default CustomInput;
