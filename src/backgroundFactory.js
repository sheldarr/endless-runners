import PIXI from 'pixi.js';

const backgroundFactory = {
    create () {
        var background = new PIXI.Container();

        var grassTile = new PIXI.Sprite(PIXI.utils.TextureCache['./assets/tiles/grass.png']);
        grassTile.isSolid = false;
        grassTile.position.x = 0;
        grassTile.position.y = 0;
        grassTile.scale.x = 1;
        grassTile.scale.y = 1;
        background.addChild(grassTile);

        var dirtTile = new PIXI.Sprite(PIXI.utils.TextureCache['./assets/tiles/dirt.png']);
        dirtTile.isSolid = false;
        dirtTile.position.x = 33;
        dirtTile.position.y = 33;
        dirtTile.scale.x = 1;
        dirtTile.scale.y = 1;
        background.addChild(dirtTile);

        var barrelTile = new PIXI.Sprite(PIXI.utils.TextureCache['./assets/tiles/barrel.png']);
        barrelTile.isSolid = false;
        barrelTile.position.x = 66;
        barrelTile.position.y = 66;
        barrelTile.scale.x = 1;
        barrelTile.scale.y = 1;
        background.addChild(barrelTile);

        return background;
    }
};

export default backgroundFactory;
