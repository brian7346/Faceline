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
    <div>
      <input
        type={props.type}
        className={inputClassNames}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />

      {props.errors[props.name] && (
        <div className="invalid-feedback">{props.errors[props.name]}</div>
      )}
    </div>
  );
};

CustomInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  errors: PropTypes.object
};

CustomInput.defaultProps = {
  type: "",
  placeholder: "",
  name: "",
  value: "",
  onChange: () => null,
  errors: {}
};

export default CustomInput;
