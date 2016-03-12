import PIXI from 'pixi.js';

const playerAnimationHandler = {
    setMoveAnimation (player) {
        const textures = [];

        for (let i = 0; i < player.character.moveTextures.count; i++) {
            textures.push(PIXI.utils.TextureCache[`./assets/characters/${player.character.moveTextures.source[i]}`]);
        }
        player.sprite.textures = textures;
        player.sprite.animationSpeed = player.character.moveTextures.animationSpeed;
    },

    setHitAnimation (player) {
        const textures = [];

        for (let i = 0; i < player.character.hitTextures.count; i++) {
            textures.push(PIXI.utils.TextureCache[`./assets/characters/${player.character.hitTextures.source[i]}`]);
        }
        player.sprite.textures = textures;
        player.sprite.animationSpeed = player.character.hitTextures.animationSpeed;

        return textures;
    },

    turnLeft (player) {
        player.sprite.anchor.x = 0.5;
        player.sprite.scale.x = -1;
        player.sprite.anchor.x = 1;
    },

    turnRight (player) {
        player.sprite.anchor.x = 0.5;
        player.sprite.scale.x = 1;
        player.sprite.anchor.x = 0;
    }
};

export default playerAnimationHandler;
