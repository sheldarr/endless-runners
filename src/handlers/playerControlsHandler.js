const playerControlsHandler = {
    handle (pressedKeys, player) {
        if (pressedKeys[player.controls.left]) {
            if (player.velocity.x >= -player.maxSpeed) {
                player.velocity.x -= player.acceleration;
            }
        }

        if (pressedKeys[player.controls.right]) {
            if (player.velocity.x <= player.maxSpeed) {
                player.velocity.x += player.acceleration;
            }
        }

        if (pressedKeys[player.controls.up]) {
            if (player.velocity.y <= player.maxSpeed) {
                player.velocity.y += player.acceleration;
            }
        }

        if (pressedKeys[player.controls.down]) {
            if (player.velocity.y >= -player.maxSpeed) {
                player.velocity.y -= player.acceleration;
            }
        }

        if (!pressedKeys[player.controls.left] && !pressedKeys[player.controls.right]) {
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

        if (!pressedKeys[player.controls.up] && !pressedKeys[player.controls.down]) {
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

        player.sprite.worldPosition.x += player.velocity.x;
        player.sprite.worldPosition.y += player.velocity.y;

        if (player.sprite.worldPosition.x < 0) {
            player.sprite.worldPosition.x = 0;
            player.velocity.x = 0;
        }

        if (player.sprite.worldPosition.x + player.sprite.width > 40 * 32) {
            player.sprite.worldPosition.x = 40 * 32 - player.sprite.width;
            player.velocity.x = 0;
        }
    }
};

export default playerControlsHandler;
