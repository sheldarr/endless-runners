import Board from '../objects/board.js';
import PIXI from 'pixi.js';
import gameWorld from './../constants/gameWorld';

const boardFactory = {
    create () {
        const sewerTextures = new PIXI.Container();

        for (let i = 0; i < gameWorld.mapHeightInTiles; i++) {
            for (let j = 0; j < gameWorld.mapWidthInTiles; j++) {
                const floorTile = new PIXI.Sprite(PIXI.utils.TextureCache['./assets/tiles/floor.png']);

                floorTile.worldPosition = new PIXI.Point();

                floorTile.isSolid = false;
                floorTile.worldPosition.x = j * gameWorld.tileSizeInPixels;
                floorTile.worldPosition.y = i * gameWorld.tileSizeInPixels;
                floorTile.scale.x = 1;
                floorTile.scale.y = 1;
                sewerTextures.addChild(floorTile);
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

                        newTile.worldPosition.x = j * gameWorld.tileSizeInPixels;
                        newTile.worldPosition.y = i * gameWorld.tileSizeInPixels;

                        sewerTextures.addChild(newTile);
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

                newTile.worldPosition.x = j * gameWorld.tileSizeInPixels;
                newTile.worldPosition.y = i * gameWorld.tileSizeInPixels;

                sewerTextures.addChild(newTile);
            }
        }

        return new Board(sewerTextures);
    }
};


export default boardFactory;
