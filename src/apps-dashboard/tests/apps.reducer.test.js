'use strict';

import app from '../apps.reducer';

describe('HANDLE CLUSTER REDUCER', () => {
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

    it('handles initial state', () => {
        expect(app(undefined, {})).toEqual(initialState);
    });
});
