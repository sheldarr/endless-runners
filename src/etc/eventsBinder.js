import gamepadHandler from '../handlers/gamepadHandler.js';
import gameState from '../etc/gameState.js';

const eventsBinder = {
    bind () {
        document.addEventListener('keydown', (event) => {
            gameState.pressedKeys[event.keyCode] = true;
        });

        document.addEventListener('keyup', (event) => {
            gameState.pressedKeys[event.keyCode] = false;
        });

        window.addEventListener('gamepadconnected', (event) => gamepadHandler.onConnect(event, gameState.players));
        window.addEventListener('gamepaddisconnected', (event) => gamepadHandler.onDisconnect(event, gameState.players));
        window.addEventListener('resize', (event) => {
            this.state.renderer.view.style.width = `${event.target.innerWidth}px`;
            this.state.renderer.view.style.height = `${event.target.innerHeight}px`;
        });
    }
};

export default eventsBinder;
