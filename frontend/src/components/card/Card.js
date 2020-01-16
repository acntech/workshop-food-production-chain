import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './card.module.css';

const Card = ({ children, className }) => (
    <div className={classNames(style.card, className)}>
        {children}
    </div>
);

Card.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default Card;