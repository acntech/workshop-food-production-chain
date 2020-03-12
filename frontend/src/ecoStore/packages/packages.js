import React from 'react';
import PropTypes from 'prop-types';
import Package from './package/package';
import style from './packages.module.css';

const Packages = ({ packages, onClick }) => {
    if (!packages) return null;

    return (
        <div className={style.packages}>
            {packages.map(({ packageID }) => <Package key={packageID} packageID={packageID} onClick={onClick} />)}
        </div>
    );
};

Packages.propTypes = {
    packages: PropTypes.array,
    onClick: PropTypes.func
};

export default Packages;