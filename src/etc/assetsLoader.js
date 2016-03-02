import PIXI from 'pixi.js';

const assetsLoader = {
    load (onProgress, onLoad) {
        PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;

        PIXI.loader
            .add('./assets/tiles/grass.png')
            .add('./assets/tiles/dirt.png')
            .add('./assets/tiles/barrel.png')
            .add('./assets/tiles/floor_edge_bottom.png')
            .add('./assets/tiles/floor.png')
            .add('./assets/tiles/wall.png')
            .add('./assets/tiles/water_edge_top.png')
            .add('./assets/characters/blob.png')
            .add('./assets/characters/drake.png')
            .add('./assets/characters/ettercap.png')
            .add('./assets/characters/goblin.png')
            .add('./assets/characters/mage.png')
            .add('./assets/characters/player.png')
            .add('./assets/characters/skeleton.png')
            .add('./assets/characters/spider.png')
            .add('./assets/characters/tortoise.png')
            .add('./assets/characters/wasp.png')
            .add('./assets/xbox-buttons/a.png')
            .add('./assets/xbox-buttons/b.png')
            .on('progress', onProgress)
            .load(onLoad);
    }
};

export default assetsLoader;
