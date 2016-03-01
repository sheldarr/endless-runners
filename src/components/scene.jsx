import React from 'react';
import PIXI from 'pixi.js';
import backgroundFactory from '../factories/backgroundFactory.js';
import cameraFactory from '../factories/cameraFactory.js';
import playersControlsHandler from '../handlers/playersControlsHandler.js';
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

        gameState.players.forEach((player) => {
            this.state.stage.addChild(player.sprite);
        });

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

        playersControlsHandler.handle(gameState.pressedKeys, gameState.players);
        collisionHandler.handle(gameState.players, this.state.background.children);
        coordinatesConverter.toScreen(gameState.players, this.state.background.children, this.state.camera);
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
