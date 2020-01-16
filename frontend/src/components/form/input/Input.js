import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './input.module.css';

const Input = ({ id, type, label, name, required, disabled, readOnly, placeholder, value, defaultValue, defaultChecked, description, errorMessage, className}) => {

    return (
        <div className={classNames(style.container, className)}>
            <input
                className={style.input}
                required={required} 
                type={type} 
                id={id}
                name={name}
                defaultValue={defaultValue}
                placeholder={placeholder}
                defaultChecked={defaultChecked}
                disabled={disabled}
                value={value}
                readOnly={readOnly}
            />
            {description && <div>{description}</div>}
            <div className={style.error}>{errorMessage}</div>
            {label && (
                <label className={style.label} htmlFor={id}>{label}</label>
            )}
        </div>
    );
};

Input.defaultProps = {
    type: 'text'
};

Input.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.any,
    label: PropTypes.string,
    required: PropTypes.bool,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    description: PropTypes.string,
    errorMessage: PropTypes.string,
    defaultChecked: PropTypes.bool
};

export default Input;