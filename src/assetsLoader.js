import PIXI from 'pixi.js';

const assetsLoader = {
    load (onProgress, onLoad) {
        PIXI.loader
            .add('./assets/tiles/grass.png')
            .add('./assets/tiles/dirt.png')
            .add('./assets/tiles/barrel.png')
            .add('./assets/player.png')
            .on('progress', onProgress)
            .load(onLoad);
    }
};

export default assetsLoader;
