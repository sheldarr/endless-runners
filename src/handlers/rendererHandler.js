const rendererHandler = {
    adjustToWindow (innerWidth, innerHeight, renderer, stage) {
        stage.scale.x *= innerWidth / renderer.width;
        stage.scale.y *= innerHeight / renderer.height;
        renderer.resize(innerWidth, innerHeight);
    }
};

export default rendererHandler;
