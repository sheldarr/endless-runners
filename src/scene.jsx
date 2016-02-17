import React from 'react';
import PIXI from 'pixi.js';
import playerLoader from './playerLoader.js';
import playerControlsHandler from './playerControlsHandler.js';

const Scene = React.createClass({
    getInitialState () {
        return {
            player: undefined,
            renderer: new PIXI.WebGLRenderer(400, 400),
            stage: new PIXI.Container()
        };
    },

    componentWillMount () {
        playerLoader.load((player) => {
            this.setState({
                player: player
            });
            this.state.stage.addChild(player);
            this.state.renderer.render(this.state.stage);
        });

        document.addEventListener('keydown', (event) => {
            playerControlsHandler.handle(event, this.state.player, (player) => {
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
            <div id='scene'></div>
        );
    }
});

export default Scene;
