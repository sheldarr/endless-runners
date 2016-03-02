import gamepadHandler from '../handlers/gamepadHandler.js';
import gameState from '../etc/gameState.js';

const eventsBinder = {
    bind () {
        document.addEventListener('keydown', (event) => {
            gameState.keyboard.buttons[event.keyCode].pressed = true;
        });

        document.addEventListener('keyup', (event) => {
            gameState.keyboard.buttons[event.keyCode].pressed = false;
        });

        window.addEventListener('gamepadconnected', (event) => gamepadHandler.onConnect(event, gameState.players));
        window.addEventListener('gamepaddisconnected', (event) => gamepadHandler.onDisconnect(event, gameState.players));
    }
};

export default eventsBinder;
