import React from 'react';

const InputGroup = ({
  label,
  errors,
  fullWidth,
  isWidth,
  isHorizontal,
  children,
  className,
  icon,
  ...otherProps
}) => (
  <div
    className={`field ${isHorizontal ? 'is-horizontal' : ''}`}
    fullWidth={fullWidth}
    isWidth={isWidth}
  >
    <div className="control">
      {label && <label className="label">{label}</label>}
      {children || <input className={`input ${className}`} {...otherProps} />}
      {errors && <p className="help has-text-danger">{errors}</p>}
    </div>
  </div>
);

export default InputGroup;
