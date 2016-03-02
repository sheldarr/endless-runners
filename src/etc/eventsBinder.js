import gamepadHandler from '../handlers/gamepadHandler.js';

const eventsBinder = {
    bind (keyboard, players) {
        document.addEventListener('keydown', (event) => {
            keyboard.buttons[event.keyCode].pressed = true;
        });

        document.addEventListener('keyup', (event) => {
            keyboard.buttons[event.keyCode].pressed = false;
        });

        window.addEventListener('gamepadconnected', (event) => gamepadHandler.onConnect(event, players));
        window.addEventListener('gamepaddisconnected', (event) => gamepadHandler.onDisconnect(event, players));
    }
};

export default eventsBinder;
