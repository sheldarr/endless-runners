import React from 'react';
import { Button } from 'react-bootstrap';

const Menu = React.createClass({
    propTypes: {
        onStartGame: React.PropTypes.func.isRequired
    },

    render () {
        return (
            <div>
                <Button bsStyle="success" onClick={this.props.onStartGame}>{'Start game'}</Button>
            </div>
        );
    }
});

export default Menu;
