import gameWorld from './../constants/gameWorld';

const cameraHandler = {
    handle (camera) {
        if (camera.position.x < gameWorld.mapWidthInPixels - 600) {
            camera.position.x += 1;
        }
    }
};

export default cameraHandler;
