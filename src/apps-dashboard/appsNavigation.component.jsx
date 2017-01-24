import {
    navigation
} from './apps.scss';
import React, { Component, PropTypes } from 'react';
import AppsNavigationItem from './appsNavigationItem.component';

class AppsWrapper extends Component {
    render() {
        return (
            <ul className={navigation}>
                {this.props.apps.map((app, index) => {
                    return <AppsNavigationItem key={index} name={app.name} customStyleName={app.customStyleName}/>
                })}
            </ul>
        )
    }
}

AppsWrapper.defaultProps = {
    apps: [
        {
            name: 'Hadoop',
            customStyleName: 'hadoop'
        },
        {
            name: 'Rails',
            customStyleName: 'rails'
        },
        {
            name: 'Chronos',
            customStyleName: 'chronos'
        },
        {
            name: 'Storm',
            customStyleName: 'storm'
        },
        {
            name: 'Spark',
            customStyleName: 'spark'
        }
    ]
};

AppsWrapper.propTypes = {
    apps: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default AppsWrapper;
