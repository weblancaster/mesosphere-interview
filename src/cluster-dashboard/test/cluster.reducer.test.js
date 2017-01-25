'use strict';

import {
    SET_CLUSTER
} from '../../shared/constants';
import cluster from '../cluster.reducer';

describe('HANDLE CLUSTER REDUCER', () => {
    const initialState = {
        clusters: [
            {
                available: true,
                appsRunning: [
                    {
                        abbr: 'Hd',
                        name: 'Hadoop',
                        addedAt: 1485328453857,
                        appName: 'hadoop'
                    }
                ]
            },
            {
                available: true,
                appsRunning: [
                    {
                        abbr: 'Ch',
                        name: 'Chronos',
                        addedAt: 1485328453857,
                        appName: 'chronos'
                    }
                ]
            },
            {
                available: true,
                appsRunning: []
            },
            {
                available: true,
                appsRunning: []
            },
            {
                available: true,
                appsRunning: []
            },
            {
                available: true,
                appsRunning: []
            },
            {
                available: true,
                appsRunning: []
            },
            {
                available: true,
                appsRunning: []
            },
            {
                available: true,
                appsRunning: []
            },
            {
                available: true,
                appsRunning: [
                    {
                        abbr: 'Sp',
                        name: 'Spark',
                        addedAt: 1485328453857,
                        appName: 'spark'
                    }
                ]
            },
            {
                available: true,
                appsRunning: []
            },
            {
                available: true,
                appsRunning: []
            },
            {
                available: true,
                appsRunning: []
            },
            {
                available: true,
                appsRunning: []
            }
        ]
    };

    it('handles initial state', () => {
        expect(cluster(undefined, {})).toEqual(initialState);
    });

    it('handles SET_CLUSTER state', () => {
        const clusterObj = {
            available: true,
            appsRunning: []
        };
        const action = {
            type: SET_CLUSTER,
            clusters: [clusterObj]
        };
        const expectedResult = {
            clusters: [clusterObj]
        };

        expect(cluster(initialState, action)).toEqual(expectedResult);
    });
});
