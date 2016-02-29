import Player from '../objects/player.js';

const playersFactory = {
    create (index, position, character) {
        return new Player(index, position, character);
    }
};

export default playersFactory;
