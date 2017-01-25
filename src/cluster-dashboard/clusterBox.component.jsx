import {
    clusterBox
} from './cluster.scss';
import React, { PropTypes } from 'react';
import AppInCluster from './appInCluster.component';

const ClusterBox = ({appsRunning}) => {
    return (
        <li className={`${clusterBox}`} >
            {
                appsRunning.map((app, index) => {
                    return <AppInCluster key={index} appName={app.appName} name={app.name} abbr={app.abbr} addedAt={app.addedAt} />
                })
            }
        </li>
    );
};

ClusterBox.propTypes = {
    appsRunning: PropTypes.arrayOf(PropTypes.object)
};

export default ClusterBox;
