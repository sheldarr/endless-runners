const playerControlsHandler = {
    handle (pressedKeys, player, callback) {
        if (pressedKeys.leftArrow) {
            if (player.position.dx >= -player.maxSpeed) {
                player.position.dx -= player.acceleration;
            }
        }

        if (pressedKeys.rightArrow) {
            if (player.position.dx <= player.maxSpeed) {
                player.position.dx += player.acceleration;
            }
        }

        if (pressedKeys.upArrow) {
            if (player.position.dy <= player.maxSpeed) {
                player.position.dy += player.acceleration;
            }
        }

        if (pressedKeys.downArrow) {
            if (player.position.dy >= -player.maxSpeed) {
                player.position.dy -= player.acceleration;
            }
        }

        if (!pressedKeys.leftArrow && !pressedKeys.rightArrow) {
            if (player.position.dx > 0) {
                if (player.position.dx < player.acceleration) {
                    player.position.dx = 0;
                } else {
                    player.position.dx -= player.acceleration;
                }
            }
            if (player.position.dx < 0) {
                if (player.position.dx > -player.acceleration) {
                    player.position.dx = 0;
                } else {
                    player.position.dx += player.acceleration;
                }
            }
        }

        if (!pressedKeys.upArrow && !pressedKeys.downArrow) {
            if (player.position.dy > 0) {
                if (player.position.dy < player.acceleration) {
                    player.position.dy = 0;
                } else {
                    player.position.dy -= player.acceleration;
                }
            }
            if (player.position.dy < 0) {
                if (player.position.dy > -player.acceleration) {
                    player.position.dy = 0;
                } else {
                    player.position.dy += player.acceleration;
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
