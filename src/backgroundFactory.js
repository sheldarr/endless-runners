import PIXI from 'pixi.js';

const backgroundFactory = {
    createDebugBackground () {
        var background = new PIXI.Container();

        for (var i = 0; i < 20; i++) {
            for (var j = 0; j < 10; j++) {
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
    },

    createSewerBackground () {
        var background = new PIXI.Container();

        for (let i = 0; i < 12; i++) {
            for (let j = 0; j < 20; j++) {
                var floorTile = new PIXI.Sprite(PIXI.utils.TextureCache['./assets/tiles/floor.png']);

                floorTile.isSolid = false;
                floorTile.position.x = j * 32;
                floorTile.position.y = i * 32;
                floorTile.scale.x = 1;
                floorTile.scale.y = 1;

                background.addChild(floorTile);
            }
        }

        for (let i = 0; i < 12; i++) {
            for (let j = 0; j < 20; j++) {
                var newTile;

                if (i !== 0 && i !== 8 && i !== 9) {
                    if (Math.random() <= 0.10) {
                        newTile = new PIXI.Sprite(PIXI.utils.TextureCache['./assets/tiles/barrel.png']);
                        newTile.isSolid = true;

                        newTile.position.x = j * 32;
                        newTile.position.y = i * 32;

                        background.addChild(newTile);
                    }

                    continue;
                }

                if (i === 0) {
                    newTile = new PIXI.Sprite(PIXI.utils.TextureCache['./assets/tiles/wall.png']);
                    newTile.isSolid = true;
                }

                if (i === 8) {
                    newTile = new PIXI.Sprite(PIXI.utils.TextureCache['./assets/tiles/floor_edge_bottom.png']);
                    newTile.isSolid = false;
                }

                if (i === 9) {
                    newTile = new PIXI.Sprite(PIXI.utils.TextureCache['./assets/tiles/water_edge_top.png']);
                    newTile.isSolid = true;
                }

                newTile.position.x = j * 32;
                newTile.position.y = i * 32;

                background.addChild(newTile);
            }
        }
        return background;
    }
};

export default backgroundFactory;
