import React from 'react';
import PIXI from 'pixi.js';
import playerFactory from './playerFactory.js';
import backgroundFactory from './backgroundFactory.js';
import playerControlsHandler from './playerControlsHandler.js';
import pressedKeysHandler from './pressedKeysHandler.js';
import collisionHandler from './collisionHandler.js';
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
            this.setState((previousState) => {
                return {
                    pressedKeys: pressedKeysHandler.keydown(event.keyCode, this.state.pressedKeys)
                };
            });
        });

        document.addEventListener('keyup', (event) => {
            this.setState((previousState) => {
                return {
                    pressedKeys: pressedKeysHandler.keyup(event.keyCode, this.state.pressedKeys)
                };
            });
        });

        engine.start(() => {
            playerControlsHandler.handle(this.state.pressedKeys, this.state.player, (player) => {
                this.setState({
                    player: player
                });
            });
            collisionHandler.handle(this.state.player, this.state.background, (player) => {
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

        console.log(background);


        this.setState({
            background: background,
            player: player
        });

        this.state.stage.addChild(background);
        this.state.stage.addChild(player);

        document.getElementById('scene').appendChild(this.state.renderer.view);
    },

    render () {
        return (
            <div id="scene"></div>
        );
    }
});

export default Scene;
