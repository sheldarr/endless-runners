import React from 'react';

import Menu from './menu.jsx';
import Scene from './scene.jsx';

const Application = React.createClass({
    getInitialState () {
        return {
            gameStarted: false
        };
    },

    startGame () {
        this.setState({
            gameStarted: true
        });
    },

    render () {
        return (
            <div>
                {this.state.gameStarted ? <Scene/> : <Menu onStartGame={this.startGame}/>}
            </div>
        );
    }
});

export default Application;
