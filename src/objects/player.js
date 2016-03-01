import PIXI from 'pixi.js';

function Player (index, position, character, controls) {
    this.index = index;
    this.enabled = false;

    this.acceleration = character.acceleration;
    this.maxSpeed = character.maxSpeed;
    this.velocity = {
        x: 0,
        y: 0
    };

    this.sprite = new PIXI.Sprite(PIXI.utils.TextureCache[`./assets/characters/${character.asset}`]);
    this.sprite.worldPosition = position;

    this.controls = controls;
}

Player.prototype.moveLeft = function () {

};

export default Player;
