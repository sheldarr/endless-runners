import PIXI from 'pixi.js';

function Player (index, position, character) {
    this.index = index;
    this.enabled = false;

    this.acceleration = character.acceleration;
    this.maxSpeed = character.maxSpeed;
    this.velocity = {
        x: 0,
        y: 0
    };

    this.sprite = new PIXI.Sprite(PIXI.utils.TextureCache[`./assets/characters/${character.asset}`]);
    this.sprite.pivot = {
        x: this.sprite.width / 2,
        y: this.sprite.height / 2
    };
    this.sprite.worldPosition = position;
}

Player.prototype.moveLeft = function () {

};

export default Player;
