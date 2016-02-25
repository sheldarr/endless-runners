import React from 'react';
import PIXI from 'pixi.js';
import playerFactory from './playerFactory.js';
import backgroundFactory from './backgroundFactory.js';
import playerControlsHandler from './playerControlsHandler.js';
import pressedKeysHandler from './pressedKeysHandler.js';
import collisionHandler from './collisionHandler.js';

const Scene = React.createClass({
    getInitialState () {
        return {
            background: undefined,
            player: undefined,
            renderer: new PIXI.WebGLRenderer(640, 320),
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
    },

    componentDidMount () {
        var background = backgroundFactory.createSewerBackground();
        var player = playerFactory.create();

        this.state.stage.addChild(background);
        this.state.stage.addChild(player);

        document.getElementById('scene').appendChild(this.state.renderer.view);

        this.setState({
            background: background,
            player: player
        }, () => {
            this.animate();
        });
    },

    animate () {
        requestAnimationFrame(this.animate);

        playerControlsHandler.handle(this.state.pressedKeys, this.state.player, (player) => {
            this.setState({
                player: player
            });
        });
        collisionHandler.handle(this.state.player, this.state.background.children, (player) => {
            this.setState({
                player: player
            });
        });

        this.state.renderer.render(this.state.stage);
    },

    render () {
        return (
            <div id="scene"></div>
        );
    }
});

export default Scene;
