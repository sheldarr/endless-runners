import PIXI from 'pixi.js';

const backgroundFactory = {
    create () {
        var background = new PIXI.Sprite(PIXI.utils.TextureCache['./assets/grass.png']);
        background.position.x = 0;
        background.position.y = 0;

        background.scale.x = 1;
        background.scale.y = 1;

        return background;
    }
};

export default backgroundFactory;
