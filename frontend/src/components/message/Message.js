import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './message.module.css';

const Message = ({ title, message, className }) => (
    <div className={classNames(style.message, className)}>
        {title && <h4>{title}</h4>}
        {message && <p>{message}</p>}
    </div>
);

Message.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    message: PropTypes.string
};

export default Message;