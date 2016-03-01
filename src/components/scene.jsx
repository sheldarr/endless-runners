import React from 'react';
import PIXI from 'pixi.js';
import backgroundFactory from '../factories/backgroundFactory.js';
import cameraFactory from '../factories/cameraFactory.js';
import playerControlsHandler from '../handlers/playerControlsHandler.js';
import pressedKeysHandler from '../handlers/pressedKeysHandler.js';
import collisionHandler from '../handlers/collisionHandler.js';
import coordinatesConverter from '../handlers/coordinatesConverter.js';
import cameraHandler from '../handlers/cameraHandler.js';
import gamepadHandler from '../handlers/gamepadHandler.js';

import gameState from '../etc/gameState.js';

const Scene = React.createClass({
    propTypes: {
        selectedCharacter: React.PropTypes.object.isRequired
    },

    getInitialState () {
        return {
            background: undefined,
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
        var camera = cameraFactory.create();

        this.state.stage.addChild(background);
        this.state.stage.addChild(gameState.players[0].sprite);

        document.getElementById('scene').appendChild(this.state.renderer.view);

        window.addEventListener('gamepadconnected', (event) => gamepadHandler.onConnect(event));
        window.addEventListener('gamepaddisconnected', (event) => gamepadHandler.onDisconnect(event));
        window.addEventListener('resize', (event) => {
            this.state.renderer.view.style.width = `${event.target.innerWidth}px`;
            this.state.renderer.view.style.height = `${event.target.innerHeight}px`;
        });

        this.setState({
            background: background,
            camera: camera
        }, () => {
            this.animate();
        });

        console.log(gameState.players);
    },

    animate () {
        requestAnimationFrame(this.animate);

        playerControlsHandler.handle(this.state.pressedKeys, gameState.players[0]);
        collisionHandler.handle(gameState.players[0], this.state.background.children);
        coordinatesConverter.toScreen(gameState.players[0], this.state.background.children, this.state.camera);
        cameraHandler.handle(this.state.camera, gameState.players[0]);

        this.state.renderer.render(this.state.stage);
    },

    render () {
        return (
            <div id="scene"></div>
        );
    }
});

export default Scene;
