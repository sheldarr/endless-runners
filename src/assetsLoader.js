import PIXI from 'pixi.js';

const assetsLoader = {
    load (onProgress, onLoad) {
        PIXI.loader
            .add('background', './assets/grass.png')
            .add('player', './assets/player.png')
            .on('progress', onProgress)
            .load(onLoad);
    }
};

export default assetsLoader;
