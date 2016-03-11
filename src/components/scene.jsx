import PIXI from 'pixi.js';
import React from 'react';

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
            renderer: new PIXI.WebGLRenderer(640, 320),
            stage: new PIXI.Container()
        };
    },

    componentWillMount () {
        rendererHandler.adjustToWindow(window.innerWidth, window.innerHeight,
            this.state.renderer, this.state.stage);
    },

    componentDidMount () {
        this.state.stage.addChild(this.props.gameState.board.sprites);

        this.props.gameState.players.forEach((player) => {
            this.state.stage.addChild(player.sprite);
        });

        document.getElementById('scene').appendChild(this.state.renderer.view);

        this.animate();

        window.addEventListener('resize', (event) => {
            rendererHandler.adjustToWindow(event.target.innerWidth, event.target.innerHeight,
                this.state.renderer, this.state.stage);
        });
    },

    animate () {
        requestAnimationFrame(this.animate);

        playersControlsHandler.handle(this.props.gameState.keyboard, this.props.gameState.players);
        collisionHandler.handle(this.props.gameState.players, this.props.gameState.board.sprites.children);
        coordinatesConverter.toScreen(this.props.gameState.players, this.props.gameState.board.sprites.children, this.props.gameState.camera);
        cameraHandler.handle(this.props.gameState.camera);

        this.state.renderer.render(this.state.stage);
    },

    render () {
        return (
            <div id="scene"></div>
        );
    }
});

export default Scene;
