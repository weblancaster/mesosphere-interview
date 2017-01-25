'use strict';

import {
    clusterApp,
    clusterBoxAbbr,
    clusterBoxName,
    clusterBoxDate
} from './cluster.scss';
import React, { PropTypes } from 'react';
import moment from 'moment';

const AppInCluster = ({appName, name, abbr, addedAt}) => {
    return (
        <div className={`${appName} ${clusterApp} appInCluster`}>
            <h3 className={clusterBoxAbbr}>{abbr}</h3>
            <span className={clusterBoxName}>{name}</span>
            <small className={clusterBoxDate}>Added {moment(addedAt).fromNow()}</small>
        </div>
    );
};

AppInCluster.propTypes = {
    appName: PropTypes.string.isRequired,
    abbr: PropTypes.string,
    name: PropTypes.string,
    addedAt: PropTypes.number
};

export default AppInCluster;
