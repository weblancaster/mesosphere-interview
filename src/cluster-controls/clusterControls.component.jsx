import {
    button
} from './clusterControls.scss';
import React, { PropTypes } from 'react';

const ClusterControls = ({styles, icon, label, action}) => {
    return (
        <button className={button} onClick={action}>
            <span className={styles}>{icon}</span>
            <span>{label}</span>
        </button>
    );
};

ClusterControls.propTypes = {
    styles: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    label: PropTypes.string
};

export default ClusterControls;
