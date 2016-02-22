import PIXI from 'pixi.js';

const assetsLoader = {
    load (onProgress, onLoad) {
        PIXI.loader
            .add('player', './assets/player.png')
            .add('background', './assets/grass.png')
            .on('progress', onProgress)
            .load(onLoad);
    }
};

export default assetsLoader;
