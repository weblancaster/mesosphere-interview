import {
    navigationItem
} from './apps.scss';
import React, { PropTypes } from 'react';
import AppsNavigationActions from './appsNavigationActions.component'

const AppsNavigationItem = ({name, customStyleName, index}) => {
    return (
        <li className={`${navigationItem} ${customStyleName}`} key={index}>
            <span>{name}</span>
            <AppsNavigationActions />
        </li>
    )
};

AppsNavigationItem.propTypes = {
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    customStyleName: PropTypes.string.isRequired
};

export default AppsNavigationItem;
