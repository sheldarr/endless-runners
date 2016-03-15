import Player from './../objects/player.js';
import playerAnimationHandler from './playerAnimationHandler.js';

Player.prototype.onHitHappened = function () {
    this.wasHit = true;
    this.ignoreCollisions = true;

    this.tryToKill();
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
