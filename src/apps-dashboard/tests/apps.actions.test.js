'use strict';

import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

import {
    SET_CLUSTER
} from '../../shared/constants';
import {
    appendTimeToApp,
    startNewApp,
    findAvailableCluster,
    findAvailableSpotInCluster,
    stopRunningApp,
    findMostRecentAppRunning
} from '../apps.actions';

describe('HANDLE APPS ACTIONS', () => {
    let store, appObj, clusterObj;

    beforeEach(() => {
        appObj = {
            abbr: 'Hd',
            name: 'Hadoop',
            appName: 'hadoop'
        };
        clusterObj = {
            available: true,
            appsRunning: [
                {
                    abbr: 'Hd',
                    name: 'Hadoop',
                    addedAt: 1485328453857,
                    appName: 'hadoop'
                }
            ]
        };
        store = mockStore({
            cluster: {
                clusters: [clusterObj]
            },
            app: {
                apps: [appObj]
            }
        });
    });

    it('handles appendTimeToApp action', () => {
        const returnedValue = appendTimeToApp(appObj);
        const containKey = ('addedAt' in returnedValue);

        expect(containKey).toBeTruthy();
    });

    it('handles startNewApp action', () => {
        const appName = 'hadoop';
        const expectedResult = {
            type: SET_CLUSTER,
            clusters: [clusterObj]
        }

        store.dispatch(startNewApp(appName));

        expect(store.getActions()[0]).toEqual(expectedResult);
    });

    it('handles findAvailableCluster action', () => {
        const expectedResult = {
            type: SET_CLUSTER,
            clusters: [clusterObj]
        }

        store.dispatch(findAvailableCluster(appObj));

        expect(store.getActions()[0]).toEqual(expectedResult);
    });

    it('handles findAvailableSpotInCluster action', () => {
        const expectedResult = {
            type: SET_CLUSTER,
            clusters: [clusterObj]
        }

        store.dispatch(findAvailableSpotInCluster(appObj));

        expect(store.getActions()[0]).toEqual(expectedResult);
        expect(store.getState().cluster.clusters[0].available).toBeFalsy();
    });

    it('handles stopRunningApp action', () => {
        const appName = 'hadoop';
        const expectedResult = {
            type: SET_CLUSTER,
            clusters: [{
                available: true,
                appsRunning: []
            }]
        }

        store.dispatch(stopRunningApp(appName));

        expect(store.getActions()[0]).toEqual(expectedResult);
    });

    it('handles findMostRecentAppRunning action', () => {
        const appName = 'hadoop';
        const clusters = store.getState().cluster.clusters.slice(0);
        const expectedResult = Object.assign({}, appObj, {
            addedAt: 1485328453857,
            positionInCluster: 0,
            positionInAppsRunning: 0
        });

        expect(findMostRecentAppRunning(clusters, appName)).toEqual(expectedResult);
    });
});
