require('normalize.css');
require('./styles/base.scss');

import {
    container,
    aside
} from './styles/main.scss';
import React, { Component } from 'react';

import ServerWrapper from '../cluster-controls/clusterControlsWrapper.container';
import AppsWrapper from '../apps-dashboard/appsWrapper.component'

class Main extends Component {
    render() {
        return (
            <div className={container}>
                <aside className={aside}>
                    <ServerWrapper />
                    <AppsWrapper />
                </aside>
                {this.props.children}
            </div>
        )
    }
}

Main.propTypes = {
    children: React.PropTypes.object
};

export default Main;
