import React from 'react';

import assetsLoader from '../etc/assetsLoader';
import Menu from './menu.jsx';
import Options from './options.jsx';
import PlayersLobby from './playersLobby.jsx';
import Scene from './scene.jsx';

import eventsBinder from '../etc/eventsBinder.js';
import gameState from '../etc/gameState.js';

const ACTIVE_DISPLAY = {
    MENU: 0,
    GAME: 1,
    OPTIONS: 2,
    LOBBY: 3
};

const Application = React.createClass({
    getInitialState () {
        return {
            activeDisplay: ACTIVE_DISPLAY.MENU,
            gameLoaded: false,
            gameOptions: {
                nickname: 'Player',
                music: 100,
                sounds: 100
            },
            loadingProgress: 0,
            loadingResource: ''
        };
    },

    componentDidMount () {
        eventsBinder.bind(gameState.keyboard, gameState.players);

        assetsLoader.load((loader, resource) => {
            this.setState({
                loadingProgress: loader.progress,
                loadingResource: resource.url
            });
        }, () => {
            this.setState({
                gameLoaded: true,
                loadingResource: 'All Resources Loaded'
            });
        });
    },

    startGame () {
        this.setState({
            activeDisplay: ACTIVE_DISPLAY.GAME
        });
    },

    displayOptions () {
        this.setState({
            activeDisplay: ACTIVE_DISPLAY.OPTIONS
        });
    },

    updateOptions (gameOptions) {
        this.setState({
            gameOptions: gameOptions
        });
    },

    displayLobby () {
        this.setState({
            activeDisplay: ACTIVE_DISPLAY.LOBBY
        });
    },

    displayMenu () {
        this.setState({
            activeDisplay: ACTIVE_DISPLAY.MENU
        });
    },

    renderActiveDisplay () {
        if (this.state.activeDisplay === ACTIVE_DISPLAY.GAME) {
            return <Scene gameState={gameState}/>;
        }

        if (this.state.activeDisplay === ACTIVE_DISPLAY.OPTIONS) {
            return <Options onChange={this.updateOptions} onClose={this.displayMenu} options={this.state.gameOptions}/>;
        }

        if (this.state.activeDisplay === ACTIVE_DISPLAY.LOBBY) {
            return <PlayersLobby gameState={gameState} onCancel={this.displayMenu} onStart={this.startGame}/>;
        }

        return (
            <Menu
                gameLoaded={this.state.gameLoaded}
                loadingProgress={this.state.loadingProgress}
                loadingResource={this.state.loadingResource}
                optionsSelected={this.displayOptions}
                startGameSelected={this.displayLobby}
            />
        );
    },

    render () {
        return (
            <div>
                {this.renderActiveDisplay()}
            </div>
        );
    }
});

export default Application;
