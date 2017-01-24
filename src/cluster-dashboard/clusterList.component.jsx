import {clusterList} from './cluster.scss';
import React, {Component, PropTypes} from 'react';
import ClusterBox from './clusterBox.component';

class ClusterList extends Component {
    render() {
        return (
            <ul className={clusterList}>
                {
                    this.props.apps.map((app, index) => {
                        return <ClusterBox
                            key={index} n
                            name={app.name}
                            abbr={app.abbr}
                            addedAt={app.addedAt}
                            customStyleName={app.customStyleName}/>
                    })
                }
            </ul>
        )
    }
}

ClusterList.defaultProps = {
    apps: [
        {
            available: false,
            abbr: 'Hd',
            name: 'Hadoop',
            addedAt: Date.now(),
            customStyleName: 'hadoop'
        },
        {
            available: false,
            abbr: 'Ch',
            name: 'Chronos',
            addedAt: Date.now(),
            customStyleName: 'chronos'
        },
        {
            available: false,
            abbr: 'Ch',
            name: 'Chronos',
            addedAt: Date.now(),
            customStyleName: 'chronos'
        },
        {
            available: true,
        },
        {
            available: true,
        },
        {
            available: true,
        },
        {
            available: true,
        },
        {
            available: true,
        },
        {
            available: true,
        },
        {
            available: true,
        },
        {
            available: false,
            abbr: 'Sp',
            name: 'Spark',
            addedAt: Date.now(),
            customStyleName: 'spark'
        },
        {
            available: true,
        },
        {
            available: true,
        },
        {
            available: true,
        },
        {
            available: true,
        }
    ]
};

ClusterList.propTypes = {
    abbr: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    addedAt: PropTypes.number.isRequired,
    customStyleName: PropTypes.string.isRequired
};

export default ClusterList;
