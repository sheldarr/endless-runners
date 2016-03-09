import PIXI from 'pixi.js';

const backgroundFactory = {
    createSewerBackground () {
        const background = new PIXI.Container();

        for (let i = 0; i < 12; i++) {
            for (let j = 0; j < 40; j++) {
                const floorTile = new PIXI.Sprite(PIXI.utils.TextureCache['./assets/tiles/floor.png']);

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
            for (let j = 0; j < 40; j++) {
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
