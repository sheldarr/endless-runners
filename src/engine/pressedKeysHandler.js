const pressedKeysHandler = {
    keydown (keyCode, pressedKeys) {
        switch (keyCode) {
        case 37:
            pressedKeys.leftArrow = true;
            break;
        case 38:
            pressedKeys.downArrow = true;
            break;
        case 39:
            pressedKeys.rightArrow = true;
            break;
        case 40:
            pressedKeys.upArrow = true;
        }

        return pressedKeys;
    },

    keyup (keyCode, pressedKeys) {
        switch (keyCode) {
        case 37:
            pressedKeys.leftArrow = false;
            break;
        case 38:
            pressedKeys.downArrow = false;
            break;
        case 39:
            pressedKeys.rightArrow = false;
            break;
        case 40:
            pressedKeys.upArrow = false;
        }

        return pressedKeys;
    }
};

export default pressedKeysHandler;
