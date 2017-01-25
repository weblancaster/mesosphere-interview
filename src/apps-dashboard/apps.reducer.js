'use strict';

const initialState = {
    apps: [
        {
            abbr: 'Hd',
            name: 'Hadoop',
            appName: 'hadoop'
        },
        {
            abbr: 'Ra',
            name: 'Rails',
            appName: 'rails'
        },
        {
            abbr: 'Ch',
            name: 'Chronos',
            appName: 'chronos'
        },
        {
            abbr: 'St',
            name: 'Storm',
            appName: 'storm'
        },
        {
            abbr: 'Sp',
            name: 'Spark',
            appName: 'spark'
        }
    ]
};

export default function app(state= initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
