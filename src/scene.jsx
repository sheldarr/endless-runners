import React from 'react';
import PIXI from 'pixi.js';

const Scene = React.createClass({
    componentDidMount () {
        var renderer = new PIXI.WebGLRenderer(400, 400);
        document.getElementById('scene').appendChild(renderer.view);

        var stage = new PIXI.Container();

        PIXI.loader.add('player', './assets/player.png').load(function (loader, resources) {
            var player = new PIXI.Sprite(resources.player.texture);

            player.position.x = 0;
            player.position.y = 0;

            player.scale.x = 1;
            player.scale.y = 1;

            stage.addChild(player);

            renderer.render(stage);
        });
    },

    render () {
        return (
            <div id="scene"></div>
        );
    }
});

export default Scene;
