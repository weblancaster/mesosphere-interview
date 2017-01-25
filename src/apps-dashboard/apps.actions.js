'use strict';

import {
    setCluster
} from '../cluster-dashboard/cluster.actions';

/**
 * Add time of startup of app in cluster
 * @param app
 * @returns {*}
 */
export function appendTimeToApp(app) {
    return Object.assign({}, app, {
        addedAt: Date.now()
    });
}

/**
 * Find the app Obj in apps
 * @param appName
 * @returns {function(*, *)}
 */
export function startNewApp(appName) {
    return (dispatch, getState) => {
        const apps = getState().app.apps;
        const app = apps.find((app) => {
            return (app.appName === appName);
        });

        dispatch(findAvailableCluster(app));
    }
}

/**
 * Find next available cluster
 * @param app
 * @returns {function(*, *)}
 */
export function findAvailableCluster(app) {
    return (dispatch, getState) => {
        const clusters = getState().cluster.clusters.slice(0);

        for ( let i = 0; i < clusters.length; i++ ) {
            let cluster = clusters[i];

            if ( cluster.available && cluster.appsRunning.length <= 0 ) {
                clusters[i].appsRunning.push(appendTimeToApp(app));
                dispatch(setCluster(clusters));
                return false;
            }
        }

        dispatch(findAvailableSpotInCluster(app));
    }
}

/**
 * When all clusters are in use
 * find available spot in one of them
 * containing less than 2 apps running
 * and add a new app
 * @param app
 * @returns {function(*, *)}
 */
export function findAvailableSpotInCluster(app) {
    return (dispatch, getState) => {
        const clusters = getState().cluster.clusters.slice(0);

        for ( let i = 0; i < clusters.length; i++ ) {
            let cluster = clusters[i];

            if ( cluster.available && cluster.appsRunning.length < 2 && cluster.appsRunning[0].appName === app.appName ) {
                clusters[i].appsRunning.push(appendTimeToApp(app));
                clusters[i].available = false;

                dispatch(setCluster(clusters));

                return false;
            }
        }
    }
}

/**
 * Delete last instance of app running
 * if non instances are running
 * don't update clusters
 * @param appName
 * @returns {function(*, *)}
 */
export function stopRunningApp(appName) {
    return (dispatch, getState) => {
        let mostRecentInstanceRunning;
        let clusters = getState().cluster.clusters.slice(0);

        mostRecentInstanceRunning = findMostRecentAppRunning(clusters, appName);

        if ( mostRecentInstanceRunning ) {
            clusters[mostRecentInstanceRunning.positionInCluster].appsRunning.splice(mostRecentInstanceRunning.positionInAppsRunning, 1);
            clusters[mostRecentInstanceRunning.positionInCluster].available = true;
            dispatch(setCluster(clusters));
        }

    }
}

/**
 * Find all instances of a running app
 * return false if nothing is running
 * or return the app containing it's position
 * @param clusters [list of clusters]
 * @param appName
 * @returns {*}
 */
export function findMostRecentAppRunning(clusters, appName) {
    let cluster;
    let clusterPosition = clusters.length - 1;
    const i = 0;
    let appInstances = [];

    while ( clusterPosition >= i ) {
        cluster = clusters[clusterPosition];

        if ( cluster.appsRunning.length > 0 && cluster.appsRunning[0].appName === appName) {
            cluster.appsRunning.forEach((app, index) => {
                appInstances.push(Object.assign({}, app, {
                    positionInCluster: clusterPosition,
                    positionInAppsRunning: index
                }));
            });
        }

        clusterPosition--;
    }

    if ( !appInstances.length > 0 ) {
        return false;
    }

    return appInstances.sort((current, next) => {
        if (current.addedAt > next.addedAt) {
            return -1;
        } else if (current.addedAt < next.addedAt) {
            return 1;
        }

        return 0;
    })[0];
}







