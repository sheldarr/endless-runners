import PIXI from 'pixi.js';

const assetsLoader = {
    load (onProgress, onLoad) {
        PIXI.loader
            .add('./assets/tiles/grass.png')
            .add('./assets/tiles/dirt.png')
            .add('./assets/tiles/barrel.png')
            .add('./assets/tiles/floor_edge_bottom.png')
            .add('./assets/tiles/floor.png')
            .add('./assets/tiles/wall.png')
            .add('./assets/tiles/water_edge_top.png')
            .add('./assets/characters/player.png')
            .on('progress', onProgress)
            .load(onLoad);
    }
};

export default assetsLoader;
