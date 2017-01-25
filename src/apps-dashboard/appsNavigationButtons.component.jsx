'use strict';

import {
    navigationActions,
    remove
} from './apps.scss';
import React, { Component, PropTypes } from 'react';
import {
    startNewApp,
    stopRunningApp
} from './apps.actions';

class AppsNavigationActions extends Component {
    startApp (appName) {
        this.props.dispatch(startNewApp(appName));
    }

    stopApp(appName) {
        this.props.dispatch(stopRunningApp(appName));
    }

    render() {
        let { appName } = this.props;

        return (
            <span className={navigationActions}>
                <button className={remove} onClick={this.stopApp.bind(this, appName)}> - </button>
                <button className="add" onClick={this.startApp.bind(this, appName)}> + </button>
            </span>
        )
    }
}

AppsNavigationActions.propTypes = {
    appName: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default AppsNavigationActions;
