'use strict';

import {
    SET_CLUSTER
} from '../shared/constants';

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

export default function cluster(state = initialState, action) {
    switch (action.type) {
        case SET_CLUSTER:
            return Object.assign({}, state, {
                clusters: action.clusters
            });
        default:
            return state;
    }
}
