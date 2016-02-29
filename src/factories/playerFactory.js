import PIXI from 'pixi.js';
const playerFactory = {
    create () {
        var player = new PIXI.Sprite(PIXI.utils.TextureCache['./assets/player.png']);

        player.worldPosition = new PIXI.Point();

        player.worldPosition.x = 128;
        player.worldPosition.y = 128;

        player.worldPosition.dx = 0;
        player.worldPosition.dy = 0;

        player.scale.x = 1;
        player.scale.y = 1;

        return player;
    }
};

export default playerFactory;
