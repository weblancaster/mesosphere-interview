import {
    button
} from './server.scss';
import React, { PropTypes } from 'react';

const ServerButton = ({styles, icon, label, action}) => {
    return (
        <button className={button} onClick={action}>
            <span className={styles}>{icon}</span>
            <span>{label}</span>
        </button>
    );
};

ServerButton.propTypes = {
    styles: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    label: PropTypes.string
};

export default ServerButton;
