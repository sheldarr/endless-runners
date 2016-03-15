import playerSpriteFactory from './../factories/playerSpriteFactory.js';

function Player (index, position, character, controls) {
    this.index = index;
    this.character = character;

    this.wasHit = false;
    this.ignoreCollisions = false;

    this.lives = 3;
    this.worldPosition = position;
    this.velocity = {x: 0, y: 0};

    this.acceleration = character.acceleration;
    this.inersity = character.inersity;
    this.maxSpeed = character.maxSpeed;

    this.sprite = playerSpriteFactory.createDefaultTexture(this.character);
    this.controls = controls;

    this.sprite.play();
}

Player.prototype.tryToKill = function () {
    if (this.lives > 0) {
        this.lives--;
    } else {
        this.sprite.visible = false;
    }
};

export default Player;
