import {
    container,
    add,
    remove
} from './server.scss';

import React, { Component } from 'react';
import ServerButton from './serverButton.component';

class ServerWrapper extends Component {
    add() {
        console.log('add called');
    }

    remove() {
        console.log('remove called');
    }

    render() {
        return (
            <div className={container}>
                <ServerButton styles={add} icon="+" label="Add server" action={this.add.bind(this)} />
                <ServerButton styles={remove} icon="-" label="Destroy" action={this.remove.bind(this)} />
            </div>
        )
    }
}

ServerWrapper.propTypes = {

};

export default ServerWrapper;
