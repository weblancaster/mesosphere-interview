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
                    addedAt: Date.now(),
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
                    addedAt: Date.now(),
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
                    addedAt: Date.now(),
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
