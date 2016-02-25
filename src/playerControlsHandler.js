const acceleration = 0.1;
const maxSpeed = 2;

const playerControlsHandler = {
    handle (pressedKeys, player, callback) {
        if (pressedKeys.leftArrow) {
            if (player.position.dx >= -maxSpeed) {
                player.position.dx -= acceleration;
            }
        }

        if (pressedKeys.rightArrow) {
            if (player.position.dx <= maxSpeed) {
                player.position.dx += acceleration;
            }
        }

        if (pressedKeys.upArrow) {
            if (player.position.dy <= maxSpeed) {
                player.position.dy += acceleration;
            }
        }

        if (pressedKeys.downArrow) {
            if (player.position.dy >= -maxSpeed) {
                player.position.dy -= acceleration;
            }
        }

        if (!pressedKeys.leftArrow && !pressedKeys.rightArrow) {
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

        if (!pressedKeys.upArrow && !pressedKeys.downArrow) {
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

        if (player.position.x < 0) {
            player.position.x = 0;
            player.position.dx = 0;
        }

        if (player.position.x + player.width > 640) {
            player.position.x = 640 - player.width;
            player.position.dx = 0;
        }
    }
};

export default playerControlsHandler;
