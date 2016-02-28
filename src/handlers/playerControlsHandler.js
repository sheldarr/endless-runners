const acceleration = 0.1;
const maxSpeed = 2;

const playerControlsHandler = {
    handle (pressedKeys, player, callback) {
        if (pressedKeys.leftArrow) {
            if (player.worldPosition.dx >= -maxSpeed) {
                player.worldPosition.dx -= acceleration;
            }
        }

        if (pressedKeys.rightArrow) {
            if (player.worldPosition.dx <= maxSpeed) {
                player.worldPosition.dx += acceleration;
            }
        }

        if (pressedKeys.upArrow) {
            if (player.worldPosition.dy <= maxSpeed) {
                player.worldPosition.dy += acceleration;
            }
        }

        if (pressedKeys.downArrow) {
            if (player.worldPosition.dy >= -maxSpeed) {
                player.worldPosition.dy -= acceleration;
            }
        }

        if (!pressedKeys.leftArrow && !pressedKeys.rightArrow) {
            if (player.worldPosition.dx > 0) {
                if (player.worldPosition.dx < acceleration) {
                    player.worldPosition.dx = 0;
                } else {
                    player.worldPosition.dx -= acceleration;
                }
            }
            if (player.worldPosition.dx < 0) {
                if (player.worldPosition.dx > -acceleration) {
                    player.worldPosition.dx = 0;
                } else {
                    player.worldPosition.dx += acceleration;
                }
            }
        }

        if (!pressedKeys.upArrow && !pressedKeys.downArrow) {
            if (player.worldPosition.dy > 0) {
                if (player.worldPosition.dy < acceleration) {
                    player.worldPosition.dy = 0;
                } else {
                    player.worldPosition.dy -= acceleration;
                }
            }
            if (player.worldPosition.dy < 0) {
                if (player.worldPosition.dy > -acceleration) {
                    player.worldPosition.dy = 0;
                } else {
                    player.worldPosition.dy += acceleration;
                }
            }
        }

        player.worldPosition.x += player.worldPosition.dx;
        player.worldPosition.y += player.worldPosition.dy;

        if (player.worldPosition.x < 0) {
            player.worldPosition.x = 0;
            player.worldPosition.dx = 0;
        }

        if (player.worldPosition.x + player.width > 40 * 32) {
            player.worldPosition.x = 40 * 32 - player.width;
            player.worldPosition.dx = 0;
        }
    }
};

export default playerControlsHandler;
