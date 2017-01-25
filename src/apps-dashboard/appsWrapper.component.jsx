'use strict';

import {
    title
} from './apps.scss';
import React  from 'react';
import AppsNavigation from './appsNavigation.container';

const AppsWrapper = () => {
    return (
        <div>
            <h3 className={title}>Available Apps</h3>
            <AppsNavigation />
        </div>
    )
};

export default AppsWrapper;
