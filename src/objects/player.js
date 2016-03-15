import playerAnimationHandler from './../handlers/playerAnimationHandler.js';
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

Player.prototype.onHitHappened = function () {
    this.tryToKill();
    this.wasHit = true;
    this.ignoreCollisions = true;
    playerAnimationHandler.setHitAnimation(this);
};

Player.prototype.onHitLasts = function () {
    this.velocity.x = 4;
    this.worldPosition.x += this.velocity.x;
};

Player.prototype.onHitFinished = function () {
    this.wasHit = false;
    this.ignoreCollisions = false;
    playerAnimationHandler.setMoveAnimation(this);
};

export default Player;
