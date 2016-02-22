const collisionHandler = {
    handle (player, obstacle, callback) {
        if (player.position.x > obstacle.position.x) {
            player.position.dx = -player.position.dx;
        }
    }
};

export default collisionHandler;
