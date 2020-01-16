import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Event from './event/Event';
import Arrow from './arrow/Arrow';
import style from './history.module.css';

const History = ({ events }) => (
    <div>
        <h2>From farm to table</h2>
        <p>What is your FOOD's story?</p>
        <div className={style.history}>
            {events.map(({timestamp, description}, index) => (
                <Fragment  key={timestamp}>
                    {(index !== 0) && <Arrow />}
                    <Event timestamp={timestamp} description={description} />
                </Fragment>
            ))}
        </div>
    </div>
);

History.propTypes = {
    events: PropTypes.arrayOf(PropTypes.shape({
        timestamp: PropTypes.string,
        description: PropTypes.string
    }))
};

export default History;