import {
    navigationActions,
    remove
} from './apps.scss';
import React, { PropTypes } from 'react';

const AppsNavigationActions = () => {
    return (
        <span className={navigationActions}>
            <button className={remove}> - </button>
            <button className="add"> + </button>
        </span>
    )
};

AppsNavigationActions.propTypes = {
    remove: PropTypes.string.isRequired
};

export default AppsNavigationActions;
