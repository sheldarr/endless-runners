import React from 'react';

import EnvironmentInformation from './environmentInformation.jsx';
import Scene from './scene.jsx';

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
