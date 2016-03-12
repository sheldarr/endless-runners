import PIXI from 'pixi.js';

const playerSpriteFactory = {
    createDefaultTexture (character) {
        const textures = [];

        for (let i = 0; i < character.moveTextures.count; i++) {
            textures.push(PIXI.utils.TextureCache[`./assets/characters/${character.moveTextures.source[i]}`]);
        }
        const playerSprite = new PIXI.extras.MovieClip(textures);

        playerSprite.animationSpeed = character.moveTextures.animationSpeed;

        return playerSprite;
    }
};

export default playerSpriteFactory;
