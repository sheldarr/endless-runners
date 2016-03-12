const CHARACTERS = [{
    acceleration: 0.1,
    asset: 'blob/blob_static.png',
    moveTextures: {
        source: ['blob/blob_move_0.png', 'blob/blob_move_1.png', 'blob/blob_move_2.png', 'blob/blob_move_3.png', 'blob/blob_move_4.png', 'blob/blob_move_5.png',
                      'blob/blob_move_6.png', 'blob/blob_move_7.png', 'blob/blob_move_8.png', 'blob/blob_move_9.png', 'blob/blob_move_10.png', 'blob/blob_move_11.png'],
        count: 12,
        animationSpeed: 0.2
    },
    hitTextures: {
        source: ['blob/blob_hit_0.png', 'blob/blob_hit_1.png'],
        count: 2,
        animationSpeed: 0.2
    },
    inersity: 0.5,
    maxSpeed: 5,
    name: 'Blob'
}, {
    acceleration: 0.8,
    asset: 'drake/drake_static.png',
    moveTextures: {
        source: ['drake/drake_move_0.png', 'drake/drake_move_1.png', 'drake/drake_move_2.png', 'drake/drake_move_3.png'],
        count: 4,
        animationSpeed: 0.1
    },
    hitTextures: {
        source: ['drake/drake_hit_0.png', 'drake/drake_hit_1.png'],
        count: 2,
        animationSpeed: 0.2
    },
    inersity: 0.3,
    maxSpeed: 8,
    name: 'Drake'
}, {
    acceleration: 0.1,
    asset: 'ettercap/ettercap_static.png',
    moveTextures: {
        source: ['ettercap/ettercap_move_0.png', 'ettercap/ettercap_move_1.png', 'ettercap/ettercap_move_2.png', 'ettercap/ettercap_move_3.png'],
        count: 4,
        animationSpeed: 0.10
    },
    hitTextures: {
        source: ['ettercap/ettercap_hit_0.png', 'ettercap/ettercap_hit_1.png'],
        count: 2,
        animationSpeed: 0.2
    },
    inersity: 0.2,
    maxSpeed: 4,
    name: 'Ettercap'
}, {
    acceleration: 0.2,
    asset: 'goblin/goblin_static.png',
    moveTextures: {
        source: ['goblin/goblin_move_0.png', 'goblin/goblin_move_1.png', 'goblin/goblin_move_2.png', 'goblin/goblin_move_3.png', 'goblin/goblin_move_4.png', 'goblin/goblin_move_5.png'],
        count: 6,
        animationSpeed: 0.07
    },
    hitTextures: {
        source: ['goblin/goblin_hit_0.png', 'goblin/goblin_hit_1.png'],
        count: 2,
        animationSpeed: 0.2
    },
    inersity: 0.1,
    maxSpeed: 3,
    name: 'Goblin'
}, {
    acceleration: 0.25,
    asset: 'mage/mage_static.png',
    moveTextures: {
        source: ['mage/mage_move_0.png', 'mage/mage_move_1.png', 'mage/mage_move_2.png', 'mage/mage_move_3.png', 'mage/mage_move_4.png', 'mage/mage_move_5.png', 'mage/mage_move_6.png'],
        count: 7,
        animationSpeed: 0.12
    },
    hitTextures: {
        source: ['mage/mage_hit_0.png', 'mage/mage_hit_1.png'],
        count: 2,
        animationSpeed: 0.2
    },
    inersity: 0.05,
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
    hitTextures: {
        source: ['player/player_hit_0.png', 'player/player_hit_1.png'],
        count: 2,
        animationSpeed: 0.2
    },
    inersity: 0.1,
    maxSpeed: 3,
    name: 'Player'
}, {
    acceleration: 0.15,
    asset: 'skeleton/skeleton_static.png',
    moveTextures: {
        source: ['skeleton/skeleton_move_0.png', 'skeleton/skeleton_move_1.png', 'skeleton/skeleton_move_2.png', 'skeleton/skeleton_move_3.png'],
        count: 4,
        animationSpeed: 0.1
    },
    hitTextures: {
        source: ['skeleton/skeleton_hit_0.png', 'skeleton/skeleton_hit_1.png'],
        count: 2,
        animationSpeed: 0.2
    },
    inersity: 0.15,
    maxSpeed: 3,
    name: 'Skeleton'
}, {
    acceleration: 0.3,
    asset: 'spider/spider_static.png',
    moveTextures: {
        source: ['spider/spider_move_0.png', 'spider/spider_move_1.png', 'spider/spider_move_2.png', 'spider/spider_move_3.png'],
        count: 4,
        animationSpeed: 0.1
    },
    hitTextures: {
        source: ['spider/spider_hit_0.png', 'spider/spider_hit_1.png'],
        count: 2,
        animationSpeed: 0.2
    },
    inersity: 0.15,
    maxSpeed: 5,
    name: 'Spider'
}, {
    acceleration: 0.1,
    asset: 'tortoise/tortoise_static.png',
    moveTextures: {
        source: ['tortoise/tortoise_move_0.png', 'tortoise/tortoise_move_1.png', 'tortoise/tortoise_move_2.png', 'tortoise/tortoise_move_3.png'],
        count: 4,
        animationSpeed: 0.1
    },
    hitTextures: {
        source: ['tortoise/tortoise_hit_0.png', 'tortoise/tortoise_hit_1.png'],
        count: 2,
        animationSpeed: 0.2
    },
    inersity: 0.4,
    maxSpeed: 6,
    name: 'Tortoise'
}, {
    acceleration: 1.0,
    asset: 'wasp/wasp_static.png',
    moveTextures: {
        source: ['wasp/wasp_move_0.png', 'wasp/wasp_move_1.png', 'wasp/wasp_move_2.png', 'wasp/wasp_move_3.png'],
        count: 4,
        animationSpeed: 0.3
    },
    hitTextures: {
        source: ['wasp/wasp_hit_0.png', 'wasp/wasp_hit_1.png'],
        count: 2,
        animationSpeed: 0.2
    },
    inersity: 0.95,
    maxSpeed: 8,
    name: 'Wasp'
}];

export default CHARACTERS;
