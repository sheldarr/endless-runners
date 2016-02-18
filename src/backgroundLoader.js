import PIXI from 'pixi.js';

const backgroundLoader = {
    load (callback) {
        PIXI.loader.add('background', './assets/grass.png').load((loader, resources) => {
            var background = new PIXI.Sprite(resources.background.texture);
            background.position.x = 0;
            background.position.y = 0;

            background.scale.x = 1;
            background.scale.y = 1;

            callback(background);
        });
    }
};

export default backgroundLoader;
