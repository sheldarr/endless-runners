import React from 'react';
import PIXI from 'pixi.js';
import playerFactory from './playerFactory.js';
import backgroundFactory from './backgroundFactory.js';
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
                leftArrow: false,
                rightArrow: false,
                upArrow: false,
                downArrow: false
            }
        };
    },

    componentWillMount () {
        document.addEventListener('keydown', (event) => {
            switch (event.keyCode) {
            case 37:
                this.setState((previousState) => {
                    var pressedKeys = previousState.pressedKeys;
                    pressedKeys.leftArrow = true;
                    return {
                        pressedKeys: pressedKeys
                    };
                });
                break;
            case 38:
                this.setState((previousState) => {
                    var pressedKeys = previousState.pressedKeys;
                    pressedKeys.downArrow = true;
                    return {
                        pressedKeys: pressedKeys
                    };
                });
                break;
            case 39:
                this.setState((previousState) => {
                    var pressedKeys = previousState.pressedKeys;
                    pressedKeys.rightArrow = true;
                    return {
                        pressedKeys: pressedKeys
                    };
                });
                break;
            case 40:
                this.setState((previousState) => {
                    var pressedKeys = previousState.pressedKeys;
                    pressedKeys.upArrow = true;
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
                    pressedKeys.leftArrow = false;
                    return {
                        pressedKeys: pressedKeys
                    };
                });
                break;
            case 38:
                this.setState((previousState) => {
                    var pressedKeys = previousState.pressedKeys;
                    pressedKeys.downArrow = false;
                    return {
                        pressedKeys: pressedKeys
                    };
                });
                break;
            case 39:
                this.setState((previousState) => {
                    var pressedKeys = previousState.pressedKeys;
                    pressedKeys.rightArrow = false;
                    return {
                        pressedKeys: pressedKeys
                    };
                });
                break;
            case 40:
                this.setState((previousState) => {
                    var pressedKeys = previousState.pressedKeys;
                    pressedKeys.upArrow = false;
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

    componentDidMount () {
        var background = backgroundFactory.create();
        var player = playerFactory.create();

        this.setState({
            background: background,
            player: player
        });

        this.state.stage.addChild(background);
        this.state.stage.addChild(player);
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
