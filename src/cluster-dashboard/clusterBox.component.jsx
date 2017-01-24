import { clusterBox } from './cluster.scss';
import React, { PropTypes } from 'react';

const ClusterBox = ({index, name, abbr, addedAt, customStyleName}) => {
    return (
        <li key={index} className={`${clusterBox} ${customStyleName} clusterBoxItem`} >
            <h3>{abbr}</h3>
            <span>{name}</span>
            <small>{addedAt}</small>
        </li>
    );
};

ClusterBox.propTypes = {
    index: PropTypes.number.isRequired,
    abbr: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    addedAt: PropTypes.number.isRequired,
    customStyleName: PropTypes.string.isRequired
};

export default ClusterBox;
