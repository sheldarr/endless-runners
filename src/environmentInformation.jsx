const React = require('react')

const EnvironmentInformation = React.createClass({
    render () {
        return (
            <div>
                <div>{`Node ${document.write(process.versions.node)}`}</div>
                <div>{`Chrome ${document.write(process.versions.chrome)}`}</div>
                <div>{`Electron ${document.write(process.versions.electron)}`}</div>
            </div>
        );
    }
});

export default EnvironmentInformation;
