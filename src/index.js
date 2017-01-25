'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

// store
import configureStore from './shared/index.store';

import Main from './core/main.component';
import ClusterDashboard from './cluster-dashboard/clusterWrapper.component';
import NotFound from './core/notFound.component';

const store = configureStore();

render(
    (<Provider store={store}>
        <Router history={browserHistory}>
            <Route component={Main} path="/">
                <IndexRoute component={ClusterDashboard} />
            </Route>
            <Route component={NotFound} path="*" />
        </Router>
    </Provider>),
    document.querySelector('#app')
);
