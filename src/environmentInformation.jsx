import React from 'react';

const EnvironmentInformation = React.createClass({
    render () {
        return (
            <div>
                <div>{`Node ${window.process.versions.node}`}</div>
                <div>{`Chrome ${window.process.versions.chrome}`}</div>
                <div>{`Electron ${window.process.versions.electron}`}</div>
            </div>
        );
    }
});

export default EnvironmentInformation;
