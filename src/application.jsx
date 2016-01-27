import React from 'react';

import EnvironmentInformation from './environmentInformation.jsx';
import Stage from './scene.jsx'

const Application = React.createClass({
    render () {
        return (
            <div>
                <EnvironmentInformation/>
                <Scene/>
            </div>
        );
    }
});

export default Application;
