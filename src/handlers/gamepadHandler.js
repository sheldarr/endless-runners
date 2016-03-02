import controls from '../constants/controls';

const gamepadHandler = {
    onConnect (event, players) {
        players[event.gamepad.index].controls = controls.xboxController[event.gamepad.index];
    },

    onDisconnect (event, gamepads, players) {
        players[event.gamepad.index].controls = controls.keyboardController[event.gamepad.index];
    }
};

export default gamepadHandler;
