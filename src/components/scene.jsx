import PIXI from 'pixi.js';
import React from 'react';

import backgroundFactory from '../factories/backgroundFactory.js';
import cameraFactory from '../factories/cameraFactory.js';
import cameraHandler from '../handlers/cameraHandler.js';
import collisionHandler from '../handlers/collisionHandler.js';
import coordinatesConverter from '../handlers/coordinatesConverter.js';
import playersControlsHandler from '../handlers/playersControlsHandler.js';
import rendererHandler from '../handlers/rendererHandler.js';

const Scene = React.createClass({
    propTypes: {
        gameState: React.PropTypes.object.isRequired
    },

    getInitialState () {
        return {
            background: undefined,
            camera: undefined,
            renderer: new PIXI.WebGLRenderer(640, 320),
            stage: new PIXI.Container()
        };
    },

    componentWillMount () {
        rendererHandler.adjustToWindow(window.innerWidth, window.innerHeight,
            this.state.renderer, this.state.stage);
    },

    componentDidMount () {
        const background = backgroundFactory.createSewerBackground();
        const camera = cameraFactory.create();

        this.state.stage.addChild(background);

        this.props.gameState.players.forEach((player) => {
            this.state.stage.addChild(player.sprite);
        });
        document.getElementById('scene').appendChild(this.state.renderer.view);

        this.setState({
            background,
            camera
        }, () => {
            this.animate();
        });

        window.addEventListener('resize', (event) => {
            rendererHandler.adjustToWindow(event.target.innerWidth, event.target.innerHeight,
                this.state.renderer, this.state.stage);
        });
    },

    animate () {
        requestAnimationFrame(this.animate);

        playersControlsHandler.handle(this.props.gameState.keyboard, this.props.gameState.players);
        collisionHandler.handle(this.props.gameState.players, this.state.background.children);
        coordinatesConverter.toScreen(this.props.gameState.players, this.state.background.children, this.state.camera);
        cameraHandler.handle(this.state.camera, this.props.gameState.players[0]);

        this.state.renderer.render(this.state.stage);
    },

    render () {
        return (
            <div id="scene"></div>
        );
    }
});

export default Scene;
