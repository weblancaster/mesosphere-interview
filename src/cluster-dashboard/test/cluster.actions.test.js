'use strict';

import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

import {
    SET_CLUSTER
} from '../../shared/constants';
import {
    startNewCluster,
    setCluster,
    addNewCluster,
    removeLastCluster
} from '../cluster.actions';

describe('HANDLE CLUSTER ACTIONS', () => {
    const cluster = {
        available: true,
        appsRunning: []
    };

    it('handles startNewCluster action', () => {
        expect(startNewCluster()).toEqual(cluster);
    });

    it('handles setCluster action', () => {
        const expectedAction = {
            type: SET_CLUSTER,
            clusters: [cluster]
        };

        expect(setCluster([cluster])).toEqual(expectedAction);
    });

    it('handles addNewCluster action', () => {
        const expectedAction = {
            type: SET_CLUSTER,
            clusters: [cluster, cluster]
        };
        const store = mockStore({
            cluster: {
                clusters: [cluster]
            }
        });

        store.dispatch(addNewCluster());

        expect(store.getActions()[0]).toEqual(expectedAction);
    });

    it('handles removeLastCluster action', () => {
        const expectedAction = {
            type: SET_CLUSTER,
            clusters: [cluster]
        };
        const store = mockStore({
            cluster: {
                clusters: [cluster, cluster]
            }
        });

        store.dispatch(removeLastCluster());

        expect(store.getActions()[0]).toEqual(expectedAction);
    });
});
