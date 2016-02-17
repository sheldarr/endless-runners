import PIXI from 'pixi.js';
var playerLoader = {
    load (callback) {
        PIXI.loader.add('player', './assets/player.png').load((loader, resources) => {
            var player = new PIXI.Sprite(resources.player.texture);

            player.position.x = 0;
            player.position.y = 0;

            player.scale.x = 1;
            player.scale.y = 1;

            callback(player);
        });
    }
};

export default playerLoader;
