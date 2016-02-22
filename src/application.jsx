import React from 'react';

import assetsLoader from './assetsLoader';
import Menu from './menu.jsx';
import Scene from './scene.jsx';

const Application = React.createClass({
    getInitialState () {
        return {
            gameLoaded: false,
            gameStarted: false,
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
            gameStarted: true
        });
    },

    render () {
        return (
            <div>
                {this.state.gameStarted
                    ? <Scene/>
                    : <Menu
                        gameLoaded={this.state.gameLoaded}
                        loadingProgress={this.state.loadingProgress}
                        loadingResource={this.state.loadingResource}
                        onStartGame={this.startGame}
                      />
                }
            </div>
        );
    }
});

export default Application;
