import PIXI from 'pixi.js';

const assetsLoader = {
    load (onProgress, onLoad) {
        PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;

        PIXI.loader
            .add('./assets/tiles/barrel.png')
            .add('./assets/tiles/floor_edge_bottom.png')
            .add('./assets/tiles/floor.png')
            .add('./assets/tiles/wall.png')
            .add('./assets/xbox-buttons/a.png')
            .add('./assets/xbox-buttons/b.png')
            .add('./assets/tiles/water_edge_top.png')

            // drake
            .add('./assets/characters/drake/drake_static.png')
            .add('./assets/characters/drake/drake_move_0.png')
            .add('./assets/characters/drake/drake_move_1.png')
            .add('./assets/characters/drake/drake_move_2.png')
            .add('./assets/characters/drake/drake_move_3.png')
            // ettercap
            .add('./assets/characters/ettercap/ettercap_static.png')
            .add('./assets/characters/ettercap/ettercap_move_0.png')
            .add('./assets/characters/ettercap/ettercap_move_1.png')
            .add('./assets/characters/ettercap/ettercap_move_2.png')
            .add('./assets/characters/ettercap/ettercap_move_3.png')
            // goblin
            .add('./assets/characters/goblin/goblin_static.png')
            .add('./assets/characters/goblin/goblin_move_0.png')
            .add('./assets/characters/goblin/goblin_move_1.png')
            .add('./assets/characters/goblin/goblin_move_2.png')
            .add('./assets/characters/goblin/goblin_move_3.png')
            .add('./assets/characters/goblin/goblin_move_4.png')
            .add('./assets/characters/goblin/goblin_move_5.png')
            // mage
            .add('./assets/characters/mage/mage_static.png')
            .add('./assets/characters/mage/mage_move_0.png')
            .add('./assets/characters/mage/mage_move_1.png')
            .add('./assets/characters/mage/mage_move_2.png')
            .add('./assets/characters/mage/mage_move_3.png')
            .add('./assets/characters/mage/mage_move_4.png')
            .add('./assets/characters/mage/mage_move_5.png')
            .add('./assets/characters/mage/mage_move_6.png')
            // player
            .add('./assets/characters/player/player_static.png')
            .add('./assets/characters/player/player_move_0.png')
            .add('./assets/characters/player/player_move_1.png')
            .add('./assets/characters/player/player_move_2.png')
            .add('./assets/characters/player/player_move_3.png')
            // skeleton
            .add('./assets/characters/skeleton/skeleton_static.png')
            .add('./assets/characters/skeleton/skeleton_move_0.png')
            .add('./assets/characters/skeleton/skeleton_move_1.png')
            .add('./assets/characters/skeleton/skeleton_move_2.png')
            .add('./assets/characters/skeleton/skeleton_move_3.png')
            // spider
            .add('./assets/characters/spider/spider_static.png')
            .add('./assets/characters/spider/spider_move_0.png')
            .add('./assets/characters/spider/spider_move_1.png')
            .add('./assets/characters/spider/spider_move_2.png')
            .add('./assets/characters/spider/spider_move_3.png')
            // tortoise
            .add('./assets/characters/tortoise/tortoise_static.png')
            .add('./assets/characters/tortoise/tortoise_move_0.png')
            .add('./assets/characters/tortoise/tortoise_move_1.png')
            .add('./assets/characters/tortoise/tortoise_move_2.png')
            .add('./assets/characters/tortoise/tortoise_move_3.png')
            // wasp
            .add('./assets/characters/wasp/wasp_static.png')
            .add('./assets/characters/wasp/wasp_move_0.png')
            .add('./assets/characters/wasp/wasp_move_1.png')
            .add('./assets/characters/wasp/wasp_move_2.png')
            .add('./assets/characters/wasp/wasp_move_3.png')
            // blob
            .add('./assets/characters/blob/blob_static.png')
            .add('./assets/characters/blob/blob_move_0.png')
            .add('./assets/characters/blob/blob_move_1.png')
            .add('./assets/characters/blob/blob_move_2.png')
            .add('./assets/characters/blob/blob_move_3.png')
            .add('./assets/characters/blob/blob_move_4.png')
            .add('./assets/characters/blob/blob_move_5.png')
            .add('./assets/characters/blob/blob_move_6.png')
            .add('./assets/characters/blob/blob_move_7.png')
            .add('./assets/characters/blob/blob_move_8.png')
            .add('./assets/characters/blob/blob_move_9.png')
            .add('./assets/characters/blob/blob_move_10.png')
            .add('./assets/characters/blob/blob_move_11.png')
            .on('progress', onProgress)
            .load(onLoad);
    }
};

export default assetsLoader;
