import React from 'react';

import assetsLoader from './assetsLoader';
import Menu from './menu.jsx';
import Options from './options.jsx';
import Scene from './scene.jsx';

const ACTIVE_DISPLAY = {
    MENU: 0,
    GAME: 1,
    OPTIONS: 2
};

const Application = React.createClass({
    getInitialState () {
        return {
            activeDisplay: ACTIVE_DISPLAY.MENU,
            gameLoaded: false,
            loadingProgress: 0,
            loadingResource: ''
        };
    },

    componentDidMount () {
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

    displayMenu () {
        this.setState({
            activeDisplay: ACTIVE_DISPLAY.MENU
        });
    },

    renderActiveDisplay () {
        if (this.state.activeDisplay === ACTIVE_DISPLAY.GAME) {
            return <Scene/>;
        }

        if (this.state.activeDisplay === ACTIVE_DISPLAY.OPTIONS) {
            return <Options onClose={this.displayMenu}/>;
        }

        return (
            <Menu
                gameLoaded={this.state.gameLoaded}
                loadingProgress={this.state.loadingProgress}
                loadingResource={this.state.loadingResource}
                optionsSelected={this.displayOptions}
                startGameSelected={this.startGame}
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
