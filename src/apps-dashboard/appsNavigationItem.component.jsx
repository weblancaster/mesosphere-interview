import {
    navigationItem
} from './apps.scss';
import React, { PropTypes } from 'react';
import AppsNavigationActions from './appsNavigationButtons.component'

const AppsNavigationItem = ({dispatch, name, appName}) => {
    return (
        <li className={`${navigationItem} ${appName}`}>
            <span>{name}</span>
            <AppsNavigationActions dispatch={dispatch} appName={appName} />
        </li>
    )
};

AppsNavigationItem.propTypes = {
    name: PropTypes.string.isRequired,
    appName: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default AppsNavigationItem;
