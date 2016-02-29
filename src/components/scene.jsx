import React from 'react';
import PIXI from 'pixi.js';
import playerFactory from '../factories/playerFactory.js';
import backgroundFactory from '../factories/backgroundFactory.js';
import cameraFactory from '../factories/cameraFactory.js';
import playerControlsHandler from '../handlers/playerControlsHandler.js';
import pressedKeysHandler from '../handlers/pressedKeysHandler.js';
import collisionHandler from '../handlers/collisionHandler.js';
import coordinatesConverter from '../handlers/coordinatesConverter.js';
import cameraHandler from '../handlers/cameraHandler.js';

const Scene = React.createClass({
    getInitialState () {
        return {
            background: undefined,
            player: undefined,
            camera: undefined,
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
        var camera = cameraFactory.create();

        this.state.stage.addChild(background);
        this.state.stage.addChild(player);

        document.getElementById('scene').appendChild(this.state.renderer.view);

        this.setState({
            background: background,
            player: player,
            camera: camera
        }, () => {
            this.animate();
        });
    },

    animate () {
        requestAnimationFrame(this.animate);

        playerControlsHandler.handle(this.state.pressedKeys, this.state.player);
        collisionHandler.handle(this.state.player, this.state.background.children);
        coordinatesConverter.toScreen(this.state.player, this.state.background.children, this.state.camera);
        cameraHandler.handle(this.state.camera, this.state.player);

        this.state.renderer.render(this.state.stage);
    },

    render () {
        return (
            <div id="scene"></div>
        );
    }
});

export default Scene;
