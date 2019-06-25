import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const InputGroup = props => {
  let inputClassNames = classNames({
    "form-control ": true,
    "form-control-lg": true,
    "is-invalid": props.errors[props.name]
  });

  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className={props.icon} />
        </span>
      </div>
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

InputGroup.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
  icon: PropTypes.string.isRequired
};

InputGroup.defaultProps = {
  errors: {}
};

export default InputGroup;
