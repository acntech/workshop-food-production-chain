import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import style from './dropdown.module.css';
import { useDropdown } from './useDropdown';

const Dropdown = (
    { 
        id, 
        label, 
        name, 
        required,
        disabled,
        elements,
        errorMessage, 
        className
    }
) => {
    const [{value, description}, setElement] = useDropdown(elements[0] || {});
    const [display, setDisplay] = useState(false);

    const select = element => {
        setDisplay(false);
        setElement(element);
    }

    return (
        <div className={classNames(style.container, className)}>
            <div className={style.dropdown}>
                <button 
                    type="button"
                    id={id}
                    disabled={disabled}
                    onClick={() => setDisplay(!display)}
                >{description}
                <FontAwesomeIcon icon={display ? faCaretUp : faCaretDown} size="2x" className={style.caret}/>
                </button>    
                {display && (
                    <div className={style.list}> 
                        {
                            elements.map(element => (
                                <button 
                                    key={element.value}
                                    type="button" 
                                    onClick={() => select(element)}
                                >
                                    {element.description}
                                </button>
                            ))
                        }
                    </div>
                )}
            </div>
            <input
                className={style.input}
                required={required} 
                type="hidden" 
                name={name}
                value={value}
                readOnly
            />
            <div className={style.error}>{errorMessage}</div>
            {label && (
                <label className={style.label} htmlFor={id}>{label}</label>
            )}
        </div>
    );
};

Dropdown.defaultProps = {
    type: 'text'
};

Dropdown.propTypes = {
    id: PropTypes.string, 
    label: PropTypes.string, 
    name: PropTypes.string, 
    required: PropTypes.bool,
    disabled: PropTypes.bool, 
    elements: PropTypes.arrayOf(PropTypes.shape({
        description: PropTypes.string,
        value: PropTypes.string
    })),
    errorMessage: PropTypes.string, 
    className: PropTypes.string
};

export default Dropdown;