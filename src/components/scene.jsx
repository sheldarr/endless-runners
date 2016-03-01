import React from 'react';
import PIXI from 'pixi.js';
import backgroundFactory from '../factories/backgroundFactory.js';
import cameraFactory from '../factories/cameraFactory.js';
import playerControlsHandler from '../handlers/playerControlsHandler.js';
import collisionHandler from '../handlers/collisionHandler.js';
import coordinatesConverter from '../handlers/coordinatesConverter.js';
import cameraHandler from '../handlers/cameraHandler.js';

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
            stage: new PIXI.Container()
        };
    },

    componentDidMount () {
        var background = backgroundFactory.createSewerBackground();
        var camera = cameraFactory.create();

        this.state.stage.addChild(background);
        this.state.stage.addChild(gameState.players[0].sprite);

        document.getElementById('scene').appendChild(this.state.renderer.view);

        this.setState({
            background: background,
            camera: camera
        }, () => {
            this.animate();
        });
    },

    animate () {
        requestAnimationFrame(this.animate);

        playerControlsHandler.handle(gameState.pressedKeys, gameState.players[0]);
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
