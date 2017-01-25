import { dashboard, title } from './cluster.scss';
import React, { Component } from 'react';
import ClusterList from './clusterList.container';

class ClusterWrapper extends Component {
    render() {
        return (
            <div className={dashboard}>
                <h2 className={title}>Server Canvas</h2>
                <ClusterList />
            </div>
        )
    }
}

export default ClusterWrapper;
