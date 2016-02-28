import PIXI from 'pixi.js';
const charactersFactory = {
    setDefaultProperties (character, position) {
        character.position = position;
        character.position.dx = 0;
        character.position.dy = 0;
    },

    createCharacter (characterOptions, position) {
        let character = new PIXI.Sprite(PIXI.utils.TextureCache[`./assets/characters/${characterOptions.asset}`]);

        character.position = position;
        character.position.dx = 0;
        character.position.dy = 0;

        return character;
    }
};

export default charactersFactory;
