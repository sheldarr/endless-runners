import PIXI from 'pixi.js';

const cameraFactory = {
    create () {
        const camera = {
            xPosition: 0,
            width: 0
        };

        camera.rectangle = new PIXI.Rectangle(0, 0, 640, 400);
        return camera;
    }
};

export default cameraFactory;
