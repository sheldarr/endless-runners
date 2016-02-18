import React from 'react';
import PIXI from 'pixi.js';
import playerLoader from './playerLoader.js';
import backgroundLoader from './backgroundLoader.js';
import playerControlsHandler from './playerControlsHandler.js';
import engine from './engine';

const Scene = React.createClass({
    getInitialState () {
        return {
            background: undefined,
            player: undefined,
            renderer: new PIXI.WebGLRenderer(400, 400),
            stage: new PIXI.Container(),
            keyState: {
                leftArrowPressed: false,
                rightArrowPressed: false,
                upArrowPressed: false,
                downArrowPressed: false
            }
        };
    },

    componentWillMount () {
        backgroundLoader.load((background) => {
            this.setState({
                background: background
            });
            this.state.stage.addChild(background);
        });
        playerLoader.load((player) => {
            this.setState({
                player: player
            });
            this.state.stage.addChild(player);
            this.state.renderer.render(this.state.stage);
        });

        document.addEventListener('keydown', (event) => {
            switch (event.keyCode) {
            case 37:
                this.setState((previousState) => {
                    var keyState = previousState.keyState;
                    keyState.leftArrowPressed = true;
                    return {
                        keyState: keyState
                    };
                });
                break;
            case 38:
                this.setState((previousState) => {
                    var keyState = previousState.keyState;
                    keyState.downArrowPressed = true;
                    return {
                        keyState: keyState
                    };
                });
                break;
            case 39:
                this.setState((previousState) => {
                    var keyState = previousState.keyState;
                    keyState.rightArrowPressed = true;
                    return {
                        keyState: keyState
                    };
                });
                break;
            case 40:
                this.setState((previousState) => {
                    var keyState = previousState.keyState;
                    keyState.upArrowPressed = true;
                    return {
                        keyState: keyState
                    };
                });
                break;
            }
        });

        document.addEventListener('keyup', (event) => {
            switch (event.keyCode) {
            case 37:
                this.setState((previousState) => {
                    var keyState = previousState.keyState;
                    keyState.leftArrowPressed = false;
                    return {
                        keyState: keyState
                    };
                });
                break;
            case 38:
                this.setState((previousState) => {
                    var keyState = previousState.keyState;
                    keyState.downArrowPressed = false;
                    return {
                        keyState: keyState
                    };
                });
                break;
            case 39:
                this.setState((previousState) => {
                    var keyState = previousState.keyState;
                    keyState.rightArrowPressed = false;
                    return {
                        keyState: keyState
                    };
                });
                break;
            case 40:
                this.setState((previousState) => {
                    var keyState = previousState.keyState;
                    keyState.upArrowPressed = false;
                    return {
                        keyState: keyState
                    };
                });
                break;
            }
        });

        engine.start(() => {
            playerControlsHandler.handle(this.state.keyState, this.state.player, (player) => {
                this.setState({
                    player: player
                });
            });
            this.state.renderer.render(this.state.stage);
        });
    },

    componentDidUpdate () {
        document.getElementById('scene').appendChild(this.state.renderer.view);
    },

    render () {
        return (
            <div id='scene'></div>
        );
    }
});

export default Scene;
