'use strict';

import {clusterList} from './cluster.scss';
import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import ClusterBox from './clusterBox.component';

class ClusterList extends Component {
    render() {
        return (
            <ul className={clusterList}>
                {
                    this.props.clusters.map((cluster, index) => {
                        return <ClusterBox key={index} cluster={cluster} appsRunning={cluster.appsRunning} />
                    })
                }
            </ul>
        )
    }
}

ClusterList.propTypes = {
    clusters: PropTypes.arrayOf(PropTypes.object)
};

function mapStateToProps(state) {
    let { clusters } = state.cluster;

    return {
        clusters
    };
}

export default connect(mapStateToProps)(ClusterList);
