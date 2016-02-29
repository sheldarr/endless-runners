const playerControlsHandler = {
    handle (pressedKeys, player) {
        if (pressedKeys.leftArrow) {
            if (player.velocity.x >= -player.maxSpeed) {
                player.velocity.x -= player.acceleration;
            }
        }

        if (pressedKeys.rightArrow) {
            if (player.velocity.x <= player.maxSpeed) {
                player.velocity.x += player.acceleration;
            }
        }

        if (pressedKeys.upArrow) {
            if (player.velocity.y <= player.maxSpeed) {
                player.velocity.y += player.acceleration;
            }
        }

        if (pressedKeys.downArrow) {
            if (player.velocity.y >= -player.maxSpeed) {
                player.velocity.y -= player.acceleration;
            }
        }

        if (!pressedKeys.leftArrow && !pressedKeys.rightArrow) {
            if (player.velocity.x > 0) {
                if (player.velocity.x < player.acceleration) {
                    player.velocity.x = 0;
                } else {
                    player.velocity.x -= player.acceleration;
                }
            }
            if (player.velocity.x < 0) {
                if (player.velocity.x > -player.acceleration) {
                    player.velocity.x = 0;
                } else {
                    player.velocity.x += player.acceleration;
                }
            }
        }

        if (!pressedKeys.upArrow && !pressedKeys.downArrow) {
            if (player.velocity.y > 0) {
                if (player.velocity.y < player.acceleration) {
                    player.velocity.y = 0;
                } else {
                    player.velocity.y -= player.acceleration;
                }
            }
            if (player.velocity.y < 0) {
                if (player.velocity.y > -player.acceleration) {
                    player.velocity.y = 0;
                } else {
                    player.velocity.y += player.acceleration;
                }
            }
        }

        player.texture.worldPosition.x += player.velocity.x;
        player.texture.worldPosition.y += player.velocity.y;

        if (player.texture.worldPosition.x < 0) {
            player.texture.worldPosition.x = 0;
            player.velocity.x = 0;
        }

        if (player.texture.worldPosition.x + player.texture.width > 40 * 32) {
            player.texture.worldPosition.x = 40 * 32 - player.texture.width;
            player.velocity.x = 0;
        }
    }
};

export default playerControlsHandler;
