import PIXI from 'pixi.js';

const backgroundFactory = {
    create () {
        var background = new PIXI.Container();

        for (var i = 0; i < 20; i++) {
            for (var j = 0; j < 12; j++) {
                var newTile;

                var randomNumber = Math.random();
                if (randomNumber <= 0.08) {
                    newTile = new PIXI.Sprite(PIXI.utils.TextureCache['./assets/tiles/barrel.png']);
                    newTile.isSolid = true;
                } else if (randomNumber < 0.6) {
                    newTile = new PIXI.Sprite(PIXI.utils.TextureCache['./assets/tiles/grass.png']);
                    newTile.isSolid = false;
                } else {
                    newTile = new PIXI.Sprite(PIXI.utils.TextureCache['./assets/tiles/dirt.png']);
                    newTile.isSolid = false;
                }

                newTile.position.x = i * 32;
                newTile.position.y = j * 32;
                newTile.scale.x = 1;
                newTile.scale.y = 1;
                background.addChild(newTile);
            }
        }
        return background;
    }
};

export default backgroundFactory;
