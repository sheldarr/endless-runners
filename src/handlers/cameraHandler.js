const cameraHandler = {
    handle (camera, player) {
        if (player.texture.position.x > 500 || player.texture.position.x < 100) {
            camera.rectangle.x += player.velocity.x;
        }
    }
};

export default cameraHandler;
