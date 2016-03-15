import IHitable from './../handlers/IHitable.js';
import playersControlsHandler from './playersControlsHandler.js';

const playerMovementHandler = {
    handle (keyboard, players) {
        players.forEach((player) => {
            if (player.wasHit) {
                player.onHitLasts();

                if (player.sprite.position.x > 200) {
                    player.onHitFinished();
                }
            } else {
                playersControlsHandler.handle(keyboard, player);
            }
        });
    }
};

export default playerMovementHandler;
