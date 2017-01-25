'use strict';

import {
    container,
    add,
    remove
} from './clusterControls.scss';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ClusterControls from './clusterControls.component';
import {
    addNewCluster,
    removeLastCluster
} from '../cluster-dashboard/cluster.actions';

class ClusterControlsWrapper extends Component {
    addNewCluster() {
        let { dispatch } = this.props;

        dispatch(addNewCluster());
    }

    removeCluster() {
        let { dispatch } = this.props;

        dispatch(removeLastCluster());
    }

    render() {
        return (
            <div className={container}>
                <ClusterControls styles={add} icon="+" label="Add server" action={this.addNewCluster.bind(this)} />
                <ClusterControls styles={remove} icon="-" label="Destroy" action={this.removeCluster.bind(this)} />
            </div>
        )
    }
}

ClusterControlsWrapper.propTypes = {
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(ClusterControlsWrapper);
