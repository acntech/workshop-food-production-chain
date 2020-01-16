import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
import style from './message.module.css';

const ErrorMessage = ({ title, message }) => (
    <Message className={style.error} title={title} message={message} />
);

ErrorMessage.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string
};

export default ErrorMessage;