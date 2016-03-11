function Camera (xPosition) {
    this.position = {
        x: xPosition,
        y: 0
    };
}

Camera.prototype.moveLeft = function (velocity) {
    this.position.x += velocity;
};

export default Camera;
