import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const CustomInput = props => {
  let inputClassNames = classNames({
    "form-control ": true,
    "form-control-lg": true
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
    </div>
  );
};

CustomInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

CustomInput.defaultProps = {
  type: "",
  placeholder: "",
  name: "",
  value: "",
  onChange: () => null
};

export default CustomInput;
