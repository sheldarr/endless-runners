import PIXI from 'pixi.js';

function Player (index, position, character, controls) {
    this.index = index;

    this.acceleration = character.acceleration;
    this.inersity = character.inersity;
    this.maxSpeed = character.maxSpeed;
    this.velocity = {
        x: 0,
        y: 0
    };

    const textureArray = [];

    for (let i = 0; i < character.moveTextures.count; i++) {
        textureArray.push(PIXI.utils.TextureCache[`./assets/characters/${character.moveTextures.source[i]}`]);
    }
    this.sprite = new PIXI.extras.MovieClip(textureArray);
    this.sprite.animationSpeed = character.moveTextures.animationSpeed;
    this.sprite.play();

    this.sprite.worldPosition = position;
    this.controls = controls;
}

Player.prototype.turnLeft = function () {
    this.sprite.anchor.x = 0.5;
    this.sprite.scale.x = -1;
    this.sprite.anchor.x = 1;
};

Player.prototype.turnRight = function () {
    this.sprite.anchor.x = 0.5;
    this.sprite.scale.x = 1;
    this.sprite.anchor.x = 0;
};

export default Player;
