const cameraHandler = {
    handle (camera) {
        if (camera.position.x < 40 * 32 - 600) {
            camera.position.x += 1;
        }
    }
};

export default cameraHandler;
