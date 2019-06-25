import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const SelectListGroup = props => {
  let selectClassNames = classNames({
    "form-control ": true,
    "form-control-lg": true,
    "is-invalid": props.errors[props.name]
  });

  const selectOptions = props.options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <div className="form-group">
      <select
        className={selectClassNames}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      >
        {selectOptions}
      </select>

      {props.info && (
        <small className="form-text text-muted">{props.info}</small>
      )}
      {props.errors[props.name] && (
        <div className="invalid-feedback">{props.errors[props.name]}</div>
      )}
    </div>
  );
};

SelectListGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
  info: PropTypes.string,
  options: PropTypes.array.isRequired
};

SelectListGroup.defaultProps = {
  errors: {}
};

export default SelectListGroup;
