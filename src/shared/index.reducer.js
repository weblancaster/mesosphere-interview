'use strict';

import {
    combineReducers
} from 'redux';

import cluster from '../cluster-dashboard/cluster.reducer';
import app from '../apps-dashboard/apps.reducer';

export default combineReducers({
    cluster,
    app
});
