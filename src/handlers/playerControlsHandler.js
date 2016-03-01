import KEYBOARD_MAP from '../constants/keyboardMap.js';

const playerControlsHandler = {
    handle (pressedKeys, player) {
        if (pressedKeys[KEYBOARD_MAP.LEFT_ARROW]) {
            if (player.velocity.x >= -player.maxSpeed) {
                player.velocity.x -= player.acceleration;
            }
        }

        if (pressedKeys[KEYBOARD_MAP.RIGHT_ARROW]) {
            if (player.velocity.x <= player.maxSpeed) {
                player.velocity.x += player.acceleration;
            }
        }

        if (pressedKeys[KEYBOARD_MAP.UP_ARROW]) {
            if (player.velocity.y <= player.maxSpeed) {
                player.velocity.y += player.acceleration;
            }
        }

        if (pressedKeys[KEYBOARD_MAP.DOWN_ARROW]) {
            if (player.velocity.y >= -player.maxSpeed) {
                player.velocity.y -= player.acceleration;
            }
        }

        if (!pressedKeys[KEYBOARD_MAP.LEFT_ARROW] && !pressedKeys[KEYBOARD_MAP.RIGHT_ARROW]) {
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

        if (!pressedKeys[KEYBOARD_MAP.UP_ARROW] && !pressedKeys[KEYBOARD_MAP.DOWN_ARROW]) {
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
