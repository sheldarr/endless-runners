const acceleration = 0.1;
const maxSpeed = 2;

const playerControlsHandler = {
    handle (pressedKeys, player, callback) {
        if (pressedKeys.leftArrowPressed) {
            if (player.position.dx >= -maxSpeed) {
                player.position.dx -= acceleration;
            }
        }

        if (pressedKeys.rightArrowPressed) {
            if (player.position.dx <= maxSpeed) {
                player.position.dx += acceleration;
            }
        }

        if (pressedKeys.upArrowPressed) {
            if (player.position.dy <= maxSpeed) {
                player.position.dy += acceleration;
            }
        }

        if (pressedKeys.downArrowPressed) {
            if (player.position.dy >= -maxSpeed) {
                player.position.dy -= acceleration;
            }
        }

        if (!pressedKeys.leftArrowPressed && !pressedKeys.rightArrowPressed) {
            if (player.position.dx > 0) {
                if (player.position.dx < acceleration) {
                    player.position.dx = 0;
                } else {
                    player.position.dx -= acceleration;
                }
            }
            if (player.position.dx < 0) {
                if (player.position.dx > -acceleration) {
                    player.position.dx = 0;
                } else {
                    player.position.dx += acceleration;
                }
            }
        }

        if (!pressedKeys.upArrowPressed && !pressedKeys.downArrowPressed) {
            if (player.position.dy > 0) {
                if (player.position.dy < acceleration) {
                    player.position.dy = 0;
                } else {
                    player.position.dy -= acceleration;
                }
            }
            if (player.position.dy < 0) {
                if (player.position.dy > -acceleration) {
                    player.position.dy = 0;
                } else {
                    player.position.dy += acceleration;
                }
            }
        }

        player.position.x += player.position.dx;
        player.position.y += player.position.dy;
    }
};

export default playerControlsHandler;
