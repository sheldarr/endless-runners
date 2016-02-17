const fps = 60;

const engine = {
    start (callback) {
        setInterval(callback, 1000 / fps);
    }
};

export default engine;
