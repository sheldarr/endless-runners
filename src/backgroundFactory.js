import PIXI from 'pixi.js';

const backgroundFactory = {
    create () {
        var background = new PIXI.Container();

        var grassTile = {
            sprite: new PIXI.Sprite(PIXI.utils.TextureCache['./assets/tiles/grass.png']),
            solid: false
        };
        grassTile.sprite.position.x = 0;
        grassTile.sprite.position.y = 0;
        grassTile.sprite.scale.x = 1;
        grassTile.sprite.scale.y = 1;
        background.addChild(grassTile.sprite);

        var dirtTile = {
            sprite: new PIXI.Sprite(PIXI.utils.TextureCache['./assets/tiles/dirt.png']),
            solid: false
        };
        dirtTile.sprite.position.x = 33;
        dirtTile.sprite.position.y = 33;
        dirtTile.sprite.scale.x = 1;
        dirtTile.sprite.scale.y = 1;
        background.addChild(dirtTile.sprite);

        var barrelTile = {
            sprite: new PIXI.Sprite(PIXI.utils.TextureCache['./assets/tiles/barrel.png']),
            solid: false
        };

        barrelTile.sprite.position.x = 66;
        barrelTile.sprite.position.y = 66;
        barrelTile.sprite.scale.x = 1;
        barrelTile.sprite.scale.y = 1;
        background.addChild(barrelTile.sprite);

        return background;
    }
};

export default backgroundFactory;
