import PIXI from 'pixi.js';

const backgroundFactory = {
    createDebugBackground () {
        let background = new PIXI.Container();

        for (let i = 0; i < 20; i++) {
            for (let j = 0; j < 10; j++) {
                let newTile;

                let randomNumber = Math.random();
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

                newTile.worldPosition.x = i * 32;
                newTile.worldPosition.y = j * 32;
                newTile.scale.x = 1;
                newTile.scale.y = 1;
                background.addChild(newTile);
            }
        }
        return background;
    },

    createSewerBackground () {
        let background = new PIXI.Container();

        for (let i = 0; i < 12; i++) {
            for (let j = 0; j < 20; j++) {
                let floorTile = new PIXI.Sprite(PIXI.utils.TextureCache['./assets/tiles/floor.png']);

                floorTile.worldPosition = new PIXI.Point();

                floorTile.isSolid = false;
                floorTile.worldPosition.x = j * 32;
                floorTile.worldPosition.y = i * 32;
                floorTile.scale.x = 1;
                floorTile.scale.y = 1;

                background.addChild(floorTile);
            }
        }

        for (let i = 0; i < 12; i++) {
            for (let j = 0; j < 20; j++) {
                let newTile;

                if (i !== 0 && i !== 8 && i !== 9) {
                    if (Math.random() <= 0.10) {
                        newTile = new PIXI.Sprite(PIXI.utils.TextureCache['./assets/tiles/barrel.png']);
                        newTile.isSolid = true;

                        newTile.worldPosition = new PIXI.Point();

                        newTile.worldPosition.x = j * 32;
                        newTile.worldPosition.y = i * 32;

                        background.addChild(newTile);
                    }

                    continue;
                }

                if (i === 0) {
                    newTile = new PIXI.Sprite(PIXI.utils.TextureCache['./assets/tiles/wall.png']);
                    newTile.isSolid = true;
                    newTile.worldPosition = new PIXI.Point();
                }

                if (i === 8) {
                    newTile = new PIXI.Sprite(PIXI.utils.TextureCache['./assets/tiles/floor_edge_bottom.png']);
                    newTile.isSolid = false;
                    newTile.worldPosition = new PIXI.Point();
                }

                if (i === 9) {
                    newTile = new PIXI.Sprite(PIXI.utils.TextureCache['./assets/tiles/water_edge_top.png']);
                    newTile.isSolid = true;
                    newTile.worldPosition = new PIXI.Point();
                }

                newTile.worldPosition.x = j * 32;
                newTile.worldPosition.y = i * 32;

                background.addChild(newTile);
            }
        }
        return background;
    }
};

export default backgroundFactory;
