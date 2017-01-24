import {
    title
} from './apps.scss';
import React, { Component } from 'react';
import AppsNavigation from './appsNavigation.component';

class AppsWrapper extends Component {
    render() {
        return (
            <div>
                <h3 className={title}>Available Apps</h3>
                <AppsNavigation />
            </div>
        )
    }
}

AppsWrapper.propTypes = {

};

export default AppsWrapper;
