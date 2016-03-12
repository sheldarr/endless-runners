import playerAnimationHandler from './playerAnimationHandler.js';

const playersControlsHandler = {
    handle (keyboard, player) {
        const gamepads = navigator.getGamepads();
        const controller = gamepads[player.index] ? gamepads[player.index] : keyboard;

        if (controller.buttons[player.controls.left].pressed) {
            if (player.velocity.x >= -player.maxSpeed) {
                player.velocity.x -= player.acceleration;
            }
            playerAnimationHandler.turnLeft(player);
        }

        if (controller.buttons[player.controls.right].pressed) {
            if (player.velocity.x <= player.maxSpeed) {
                player.velocity.x += player.acceleration;
            }
            playerAnimationHandler.turnRight(player);
        }

        if (controller.buttons[player.controls.down].pressed) {
            if (player.velocity.y <= player.maxSpeed) {
                player.velocity.y += player.acceleration;
            }
        }

        if (controller.buttons[player.controls.up].pressed) {
            if (player.velocity.y >= -player.maxSpeed) {
                player.velocity.y -= player.acceleration;
            }
        }

        if (!controller.buttons[player.controls.left].pressed && !controller.buttons[player.controls.right].pressed) {
            if (player.velocity.x > 0) {
                if (player.velocity.x < player.acceleration) {
                    player.velocity.x = 0;
                } else {
                    player.velocity.x -= (player.acceleration - player.inersity * player.acceleration);
                }
            }
            if (player.velocity.x < 0) {
                if (player.velocity.x > -player.acceleration) {
                    player.velocity.x = 0;
                } else {
                    player.velocity.x += (player.acceleration - player.inersity * player.acceleration);
                }
            }
        }

        if (!controller.buttons[player.controls.up].pressed && !controller.buttons[player.controls.down].pressed) {
            if (player.velocity.y > 0) {
                if (player.velocity.y < player.acceleration) {
                    player.velocity.y = 0;
                } else {
                    player.velocity.y -= (player.acceleration - player.inersity * player.acceleration);
                }
            }
            if (player.velocity.y < 0) {
                if (player.velocity.y > -player.acceleration) {
                    player.velocity.y = 0;
                } else {
                    player.velocity.y += (player.acceleration - player.inersity * player.acceleration);
                }
            }
        }

        player.worldPosition.x += player.velocity.x;
        player.worldPosition.y += player.velocity.y;

        if (player.worldPosition.x < 0) {
            player.worldPosition.x = 0;
            player.velocity.x = 0;
        }

        if (player.worldPosition.x + player.sprite.width > 40 * 32) {
            player.worldPosition.x = 40 * 32 - player.sprite.width;
            player.velocity.x = 0;
        }
    }
};

export default playersControlsHandler;
