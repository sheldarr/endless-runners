import PIXI from 'pixi.js';

function Player (index, position, character) {
    this.index = index;

    this.acceleration = character.acceleration;
    this.maxSpeed = character.maxSpeed;
    this.velocity = {
        x: 0,
        y: 0
    };

    this.texture = new PIXI.Sprite(PIXI.utils.TextureCache[`./assets/characters/${character.asset}`]);
    this.texture.worldPosition = position;

    console.log(this);
}

Player.prototype.moveLeft = function () {

};

export default Player;
