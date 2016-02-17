const playerControlsHandler = {
    handle (keyState, player, callback) {
        if (keyState.leftArrowPressed) {
            player.position.x -= 1;
        }
        if (keyState.rightArrowPressed) {
            player.position.x += 1;
        }
        if (keyState.upArrowPressed) {
            player.position.y += 1;
        }
        if (keyState.downArrowPressed) {
            player.position.y -= 1;
        }
    }
};

export default playerControlsHandler;
