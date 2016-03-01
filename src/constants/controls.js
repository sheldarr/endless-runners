import KEYBOARD_MAP from './keyboardMap.js';
import XBOX_CONTROLLER_MAP from './xboxControllerMap.js';

const controls = {
    keyboardController: [{
        join: KEYBOARD_MAP.NUMBER_1,
        quit: KEYBOARD_MAP.NUMBER_1,
        up: KEYBOARD_MAP.UP_ARROW,
        down: KEYBOARD_MAP.DOWN_ARROW,
        left: KEYBOARD_MAP.LEFT_ARROW,
        right: KEYBOARD_MAP.RIGHT_ARROW
    }, {
        join: KEYBOARD_MAP.NUMBER_2,
        quit: KEYBOARD_MAP.NUMBER_2,
        up: KEYBOARD_MAP.W,
        down: KEYBOARD_MAP.S,
        left: KEYBOARD_MAP.A,
        right: KEYBOARD_MAP.D
    }, {
        join: KEYBOARD_MAP.NUMBER_3,
        quit: KEYBOARD_MAP.NUMBER_3,
        up: KEYBOARD_MAP.Y,
        down: KEYBOARD_MAP.H,
        left: KEYBOARD_MAP.G,
        right: KEYBOARD_MAP.J
    }, {
        join: KEYBOARD_MAP.NUMBER_4,
        quit: KEYBOARD_MAP.NUMBER_4,
        up: KEYBOARD_MAP.NUMPAD_8,
        down: KEYBOARD_MAP.NUMPAD_5,
        left: KEYBOARD_MAP.NUMPAD_4,
        right: KEYBOARD_MAP.NUMPAD_6
    }],
    xboxController: [{
        join: XBOX_CONTROLLER_MAP.START,
        quit: XBOX_CONTROLLER_MAP.BACK,
        up: XBOX_CONTROLLER_MAP.DPAD_UP,
        down: XBOX_CONTROLLER_MAP.DPAD_DOWN,
        left: XBOX_CONTROLLER_MAP.DPAD_LEFT,
        right: XBOX_CONTROLLER_MAP.DPAD_RIGHT
    }, {
        join: XBOX_CONTROLLER_MAP.START,
        quit: XBOX_CONTROLLER_MAP.BACK,
        up: XBOX_CONTROLLER_MAP.DPAD_UP,
        down: XBOX_CONTROLLER_MAP.DPAD_DOWN,
        left: XBOX_CONTROLLER_MAP.DPAD_LEFT,
        right: XBOX_CONTROLLER_MAP.DPAD_RIGHT
    }, {
        join: XBOX_CONTROLLER_MAP.START,
        quit: XBOX_CONTROLLER_MAP.BACK,
        up: XBOX_CONTROLLER_MAP.DPAD_UP,
        down: XBOX_CONTROLLER_MAP.DPAD_DOWN,
        left: XBOX_CONTROLLER_MAP.DPAD_LEFT,
        right: XBOX_CONTROLLER_MAP.DPAD_RIGHT
    }, {
        join: XBOX_CONTROLLER_MAP.START,
        quit: XBOX_CONTROLLER_MAP.BACK,
        up: XBOX_CONTROLLER_MAP.DPAD_UP,
        down: XBOX_CONTROLLER_MAP.DPAD_DOWN,
        left: XBOX_CONTROLLER_MAP.DPAD_LEFT,
        right: XBOX_CONTROLLER_MAP.DPAD_RIGHT
    }]
};

export default controls;
