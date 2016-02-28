import PIXI from 'pixi.js';
const charactersFactory = {
    setDefaultProperties (character, position) {
        character.position = position;
        character.position.dx = 0;
        character.position.dy = 0;
    },

    createBlob (position) {
        let character = new PIXI.Sprite(PIXI.utils.TextureCache['./assets/characters/blob.png']);

        this.setDefaultProperties(character, position);

        return character;
    },

    createDragon (position) {
        let character = new PIXI.Sprite(PIXI.utils.TextureCache['./assets/characters/dragon.png']);

        this.setDefaultProperties(character, position);

        return character;
    },

    createEttercap (position) {
        let character = new PIXI.Sprite(PIXI.utils.TextureCache['./assets/characters/ettercap.png']);

        this.setDefaultProperties(character, position);

        return character;
    },

    createGoblin (position) {
        let character = new PIXI.Sprite(PIXI.utils.TextureCache['./assets/characters/goblin.png']);

        this.setDefaultProperties(character, position);

        return character;
    },

    createMage (position) {
        let character = new PIXI.Sprite(PIXI.utils.TextureCache['./assets/characters/mage.png']);

        this.setDefaultProperties(character, position);

        return character;
    },

    createPlayer (position) {
        let character = new PIXI.Sprite(PIXI.utils.TextureCache['./assets/characters/player.png']);

        this.setDefaultProperties(character, position);

        return character;
    },

    createSkeleton (position) {
        let character = new PIXI.Sprite(PIXI.utils.TextureCache['./assets/characters/skeleton.png']);

        this.setDefaultProperties(character, position);

        return character;
    },

    createSpider (position) {
        let character = new PIXI.Sprite(PIXI.utils.TextureCache['./assets/characters/spider.png']);

        this.setDefaultProperties(character, position);

        return character;
    },

    createTortoise (position) {
        let character = new PIXI.Sprite(PIXI.utils.TextureCache['./assets/characters/tortoise.png']);

        this.setDefaultProperties(character, position);

        return character;
    },

    createWasp (position) {
        let character = new PIXI.Sprite(PIXI.utils.TextureCache['./assets/characters/wasp.png']);

        this.setDefaultProperties(character, position);

        return character;
    }
};

export default charactersFactory;
