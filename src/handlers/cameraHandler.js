const cameraHandler = {
    handle (camera, player) {
        if (player.position.x > 500 || player.position.x < 100) {
            camera.rectangle.x += player.worldPosition.dx;
        }
    }
};

export default cameraHandler;
