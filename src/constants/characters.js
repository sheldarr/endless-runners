const CHARACTERS = [{
    acceleration: 0.1,
    asset: 'blob/blob_static.png',
    moveTextures: {
        source: ['blob/blob_move_0.png', 'blob/blob_move_1.png', 'blob/blob_move_2.png', 'blob/blob_move_3.png', 'blob/blob_move_4.png', 'blob/blob_move_5.png',
                          'blob/blob_move_6.png', 'blob/blob_move_7.png', 'blob/blob_move_8.png', 'blob/blob_move_9.png', 'blob/blob_move_10.png', 'blob/blob_move_11.png'],
        count: 12,
        animationSpeed: 0.2
    },
    maxSpeed: 4,
    name: 'Blob'
}, {
    acceleration: 0.5,
    asset: 'drake/drake_static.png',
    moveTextures: {
        source: ['drake/drake_move_0.png', 'drake/drake_move_1.png', 'drake/drake_move_2.png', 'drake/drake_move_3.png'],
        count: 4,
        animationSpeed: 0.1
    },
    maxSpeed: 5,
    name: 'Drake'
}, {
    acceleration: 0.2,
    asset: 'ettercap/ettercap_static.png',
    moveTextures: {
        source: ['ettercap/ettercap_move_0.png', 'ettercap/ettercap_move_1.png', 'ettercap/ettercap_move_2.png', 'ettercap/ettercap_move_3.png'],
        count: 4,
        animationSpeed: 0.10
    },
    maxSpeed: 4,
    name: 'Ettercap'
}, {
    acceleration: 0.1,
    asset: 'goblin/goblin_static.png',
    moveTextures: {
        source: ['goblin/goblin_move_0.png', 'goblin/goblin_move_1.png', 'goblin/goblin_move_2.png', 'goblin/goblin_move_3.png', 'goblin/goblin_move_4.png', 'goblin/goblin_move_5.png'],
        count: 6,
        animationSpeed: 0.07
    },
    maxSpeed: 2,
    name: 'Goblin'
}, {
    acceleration: 0.2,
    asset: 'mage/mage_static.png',
    moveTextures: {
        source: ['mage/mage_move_0.png', 'mage/mage_move_1.png', 'mage/mage_move_2.png', 'mage/mage_move_3.png', 'mage/mage_move_4.png', 'mage/mage_move_5.png', 'mage/mage_move_6.png'],
        count: 7,
        animationSpeed: 0.12
    },
    maxSpeed: 3,
    name: 'Mage'
}, {
    acceleration: 0.2,
    asset: 'player/player_static.png',
    moveTextures: {
        source: ['player/player_move_0.png', 'player/player_move_1.png', 'player/player_move_2.png', 'player/player_move_3.png'],
        count: 4,
        animationSpeed: 0.1
    },
    maxSpeed: 2,
    name: 'Player'
}, {
    acceleration: 0.1,
    asset: 'skeleton/skeleton_static.png',
    moveTextures: {
        source: ['skeleton/skeleton_move_0.png', 'skeleton/skeleton_move_1.png', 'skeleton/skeleton_move_2.png', 'skeleton/skeleton_move_3.png'],
        count: 4,
        animationSpeed: 0.1
    },
    maxSpeed: 3,
    name: 'Skeleton'
}, {
    acceleration: 0.5,
    asset: 'spider/spider_static.png',
    moveTextures: {
        source: ['spider/spider_move_0.png', 'spider/spider_move_1.png', 'spider/spider_move_2.png', 'spider/spider_move_3.png'],
        count: 4,
        animationSpeed: 0.1
    },
    maxSpeed: 3,
    name: 'Spider'
}, {
    acceleration: 0.1,
    asset: 'tortoise/tortoise_static.png',
    moveTextures: {
        source: ['tortoise/tortoise_move_0.png', 'tortoise/tortoise_move_1.png', 'tortoise/tortoise_move_2.png', 'tortoise/tortoise_move_3.png'],
        count: 4,
        animationSpeed: 0.1
    },
    maxSpeed: 8,
    name: 'Tortoise'
}, {
    acceleration: 1.0,
    asset: 'wasp/wasp_static.png',
    moveTextures: {
        source: ['wasp/wasp_move_0.png', 'wasp/wasp_move_1.png', 'wasp/wasp_move_2.png', 'wasp/wasp_move_3.png'],
        count: 4,
        animationSpeed: 0.3
    },
    maxSpeed: 8,
    name: 'Wasp'
}];

export default CHARACTERS;
