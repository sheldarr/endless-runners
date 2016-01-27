import React from 'react';
import PIXI from 'pixi.js';

const Scene = React.createClass({
    getInitialState () {
        return {
            player: undefined,
            renderer: new PIXI.WebGLRenderer(400, 400),
            stage: new PIXI.Container()
        };
    },

    componentDidMount () {
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

        PIXI.loader.add('player', './assets/player.png').load(function (loader, resources) {
            var player = new PIXI.Sprite(resources.player.texture);

            player.position.x = 0;
            player.position.y = 0;

            player.scale.x = 1;
            player.scale.y = 1;

            this.setState({
                player: player
            });

            this.state.stage.addChild(player);
            this.state.renderer.render(this.state.stage);
        }.bind(this));
    },

    componentWillUpdate () {
        this.state.renderer.render(this.state.stage);
    },

    render () {
        return (
            <div id="scene"></div>
        );
    }
});

export default Scene;
