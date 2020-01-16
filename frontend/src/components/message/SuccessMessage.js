import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
import style from './message.module.css';

const SuccessMessage = ({ title, message }) => (
    <Message className={style.success} title={title} message={message} />
);


SuccessMessage.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string
};

export default SuccessMessage;