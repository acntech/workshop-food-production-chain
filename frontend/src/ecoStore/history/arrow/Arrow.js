import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const Arrow = ({ className }) => <FontAwesomeIcon className={className} icon={faArrowDown} size="2x" />;

Arrow.propTypes = {
    className: PropTypes.string
};

export default Arrow;