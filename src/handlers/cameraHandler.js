const cameraHandler = {
    handle (camera, player) {
        if (player.sprite.position.x > 500 || player.sprite.position.x < 100) {
            camera.rectangle.x += player.velocity.x;
        }
    }
};

export default cameraHandler;
