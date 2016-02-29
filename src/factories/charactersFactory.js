import PIXI from 'pixi.js';
const charactersFactory = {
    setDefaultProperties (character, position) {
        character.worldPosition = position;
        character.worldPosition.dx = 0;
        character.worldPosition.dy = 0;
    },

    createCharacter (characterOptions, position) {
        let character = new PIXI.Sprite(PIXI.utils.TextureCache[`./assets/characters/${characterOptions.asset}`]);

        character.worldPosition = position;

        character.worldPosition.dx = 0;
        character.worldPosition.dy = 0;

        Object.assign(character, characterOptions);

        return character;
    }
};

export default charactersFactory;
