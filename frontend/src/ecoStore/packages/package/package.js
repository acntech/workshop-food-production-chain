import React from 'react';
import PropTypes from 'prop-types';
import style from '../packages.module.css';

const Package = ({ packageID, onClick }) => (
    <button 
        className={style.package}
        onClick={() => onClick(packageID)}    
    >
        {packageID}
    </button>
);

Package.propTypes = {
    packageID: PropTypes.string,
    onClick: PropTypes.func
};

export default Package;