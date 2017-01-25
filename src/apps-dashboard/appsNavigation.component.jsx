import {
    navigation
} from './apps.scss';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AppsNavigationItem from './appsNavigationItem.component';

class AppsNavigation extends Component {
    render() {
        let { dispatch } = this.props;

        return (
            <ul className={navigation}>
                {this.props.apps.map((app, index) => {
                    return <AppsNavigationItem dispatch={dispatch} key={index} name={app.name} appName={app.appName} />
                })}
            </ul>
        )
    }
}

AppsNavigation.propTypes = {
    apps: PropTypes.arrayOf(PropTypes.object).isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    let { apps } = state.app;

    return {
        apps
    }
}

export default connect(mapStateToProps)(AppsNavigation);
