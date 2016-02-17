import React from 'react';
import PIXI from 'pixi.js';
import playerLoader from './playerLoader.js';

const Scene = React.createClass({
    getInitialState () {
        return {
            player: undefined,
            renderer: new PIXI.WebGLRenderer(400, 400),
            stage: new PIXI.Container()
        };
    },

    componentDidMount () {
        playerLoader.load((player) => {
            this.state.stage.addChild(player);
            this.state.renderer.render(this.state.stage);
        });

        document.addEventListener('keydown', (event) => {
            switch (event.keyCode) {
            case 37:
                this.setState((previousState) => {
                    var player = previousState.player;

                    player.position.x -= 1;

                    return {
                        player: player
                    };
                });
                break;
            case 38:
                this.setState((previousState) => {
                    var player = previousState.player;

                    player.position.y -= 1;

                    return {
                        player: player
                    };
                });
                break;
            case 39:
                this.setState((previousState) => {
                    var player = previousState.player;

                    player.position.x += 1;

                    return {
                        player: player
                    };
                });
                break;
            case 40:
                this.setState((previousState) => {
                    var player = previousState.player;

                    player.position.y += 1;

                    return {
                        player: player
                    };
                });
                break;
            }
        });

        document.getElementById('scene').appendChild(this.state.renderer.view);


    },

    componentWillUpdate () {
        this.state.renderer.render(this.state.stage);
    },

    render () {
        return (
            <div id='scene'></div>
        );
    }
});

export default Scene;
