import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';
import style from './event.module.css';


const Event = ({ timestamp, description, className}) => (
    <div className={classNames(style.container, className)}>
        <h3>{moment(timestamp).format('DD.MM.YYYY (HH:mm)')}</h3>
        <p>{description}</p>
    </div>
);

Event.propTypes = {
    timestamp: PropTypes.string,
    name: PropTypes.string,
};

export default Event;