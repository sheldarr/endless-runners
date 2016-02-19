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
            pressedKeys: {
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
        });

        document.addEventListener('keydown', (event) => {
            switch (event.keyCode) {
            case 37:
                this.setState((previousState) => {
                    var pressedKeys = previousState.pressedKeys;
                    pressedKeys.leftArrowPressed = true;
                    return {
                        pressedKeys: pressedKeys
                    };
                });
                break;
            case 38:
                this.setState((previousState) => {
                    var pressedKeys = previousState.pressedKeys;
                    pressedKeys.downArrowPressed = true;
                    return {
                        pressedKeys: pressedKeys
                    };
                });
                break;
            case 39:
                this.setState((previousState) => {
                    var pressedKeys = previousState.pressedKeys;
                    pressedKeys.rightArrowPressed = true;
                    return {
                        pressedKeys: pressedKeys
                    };
                });
                break;
            case 40:
                this.setState((previousState) => {
                    var pressedKeys = previousState.pressedKeys;
                    pressedKeys.upArrowPressed = true;
                    return {
                        pressedKeys: pressedKeys
                    };
                });
                break;
            }
        });

        document.addEventListener('keyup', (event) => {
            switch (event.keyCode) {
            case 37:
                this.setState((previousState) => {
                    var pressedKeys = previousState.pressedKeys;
                    pressedKeys.leftArrowPressed = false;
                    return {
                        pressedKeys: pressedKeys
                    };
                });
                break;
            case 38:
                this.setState((previousState) => {
                    var pressedKeys = previousState.pressedKeys;
                    pressedKeys.downArrowPressed = false;
                    return {
                        pressedKeys: pressedKeys
                    };
                });
                break;
            case 39:
                this.setState((previousState) => {
                    var pressedKeys = previousState.pressedKeys;
                    pressedKeys.rightArrowPressed = false;
                    return {
                        pressedKeys: pressedKeys
                    };
                });
                break;
            case 40:
                this.setState((previousState) => {
                    var pressedKeys = previousState.pressedKeys;
                    pressedKeys.upArrowPressed = false;
                    return {
                        pressedKeys: pressedKeys
                    };
                });
                break;
            }
        });

        engine.start(() => {
            playerControlsHandler.handle(this.state.pressedKeys, this.state.player, (player) => {
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
            <div id="scene"></div>
        );
    }
});

export default Scene;
