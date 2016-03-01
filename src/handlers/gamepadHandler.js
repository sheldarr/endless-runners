import controls from '../constants/controls';

const gamepadHandler = {
    onConnect (event, players) {
        players[event.gamepad.index].controls = controls.xboxController[event.gamepad.index];
        console.log(event);
    },

    onDisconnect (event, players) {
        players[event.gamepad.index].controls = controls.keyboardController[event.gamepad.index];
        console.log(event);
    }
};

export default gamepadHandler;
