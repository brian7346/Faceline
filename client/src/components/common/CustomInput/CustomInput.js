import React, { useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../context/ThemeContext';

const CustomInput = props => {
  const { theme } = useContext(ThemeContext);

  let inputClassNames = classNames({
    'form-control ': true,
    'form-control-lg': true,
    'dark-bg': theme.darkMode,
    'is-invalid': props.errors[props.name]
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
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
  disabled: PropTypes.bool,
  info: PropTypes.string
};

CustomInput.defaultProps = {
  type: 'text',
  placeholder: '',
  errors: {}
};

export default CustomInput;
