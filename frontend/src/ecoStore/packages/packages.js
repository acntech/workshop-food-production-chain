import React from 'react';
import PropTypes from 'prop-types';
import Package from './package/package';
import style from './packages.module.css';

const Packages = ({ packageIDs, onClick }) => {
    if (!packageIDs) return null;

    return (
        <div className={style.packages}>
            {packageIDs.map(id => <Package key={id} packageID={id} onClick={onClick} />)}
        </div>
    );
};

Packages.propTypes = {
    packageIDs: PropTypes.arrayOf(PropTypes.string),
    onClick: PropTypes.func
};

export default Packages;