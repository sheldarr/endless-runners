import Player from '../objects/player.js';
import controls from '../constants/controls';

const playersFactory = {
    create (index, position, character) {
        return new Player(index, position, character, controls.keyboardController[index]);
    }
};

export default playersFactory;
