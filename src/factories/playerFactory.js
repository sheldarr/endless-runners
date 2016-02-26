import PIXI from 'pixi.js';
const playerFactory = {
    create () {
        var player = new PIXI.Sprite(PIXI.utils.TextureCache['./assets/player.png']);

        player.position.x = 128;
        player.position.y = 128;

        player.position.dx = 0;
        player.position.dy = 0;

        player.scale.x = 1;
        player.scale.y = 1;

        return player;
    }
};

export default playerFactory;
