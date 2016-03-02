const rendererHandler = {
    adjustToWindow (renderer, stage) {
        stage.scale.x *= `${event.target.innerWidth}` / renderer.width;
        stage.scale.y *= `${event.target.innerHeight}` / renderer.height;
        renderer.resize(`${event.target.innerWidth}`, `${event.target.innerHeight}`);
    }
};

export default rendererHandler;
