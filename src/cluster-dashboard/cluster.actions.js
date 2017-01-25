'use strict';

import {
    SET_CLUSTER
} from '../shared/constants';
import {
    findAvailableCluster
} from '../apps-dashboard/apps.actions';

/**
 * Create new available cluster
 * @returns {{available: boolean, appsRunning: Array}}
 */
export function startNewCluster() {
    return {
        available: true,
        appsRunning: []
    }
}

/**
 * Set/update reducer with clusters
 * @param clusters
 * @returns {{type, clusters: Array}}
 */
export function setCluster(clusters) {
    return {
        type: SET_CLUSTER,
        clusters
    }
}

/**
 * Add new cluster to clusters list
 * @returns {function(*, *)}
 */
export function addNewCluster() {
    return (dispatch, getState) => {
        const clusters = getState().cluster.clusters.slice(0);

        clusters.push(startNewCluster());
        dispatch(setCluster(clusters));
    }
}

/**
 * Remove last created cluster
 * and restart apps running in cluster
 * in another available cluster
 * @returns {function(*, *)}
 */
export function removeLastCluster() {
    return (dispatch, getState) => {
        const clusters = getState().cluster.clusters.slice(0);
        const appsRunningInCluster = clusters[clusters.length - 1].appsRunning;
        const updatedClusters = clusters.slice(0, clusters.length - 1);

        dispatch(setCluster(updatedClusters));

        appsRunningInCluster.forEach((app) => {
            dispatch(findAvailableCluster(app));
        });
    }
}
