import controls from '../constants/controls';
import Player from '../objects/player.js';

const playersFactory = {
    create (index, position, character) {
        return new Player(index, position, character, controls.keyboardController[index]);
    }
};

export default playersFactory;
