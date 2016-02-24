const collisionHandler = {
    handle (player, tiles, callback) {
        tiles.forEach((tile) => {
            if (tile.isSolid) {
                if (!(player.position.x + player.position.dx > tile.position.x + tile.width ||
                player.position.x + player.width + player.position.dx < tile.position.x ||
                player.position.y + player.position.dy > tile.position.y + tile.height ||
                player.position.y + player.height + player.position.dy < tile.position.y)) {
                    //  vertical collision
                    if ((player.position.y < tile.position.y && player.position.y + player.height < tile.position.y) ||
                    (player.position.y > tile.position.y + tile.height && player.position.y + player.height > tile.position.y + tile.height)) {
                        player.position.dy *= -1.1;
                    }
                    //  horizontal collision
                    if ((player.position.x < tile.position.x && player.position.x + player.width < tile.position.x) ||
                    (player.position.x > tile.position.x + tile.width && player.position.x + player.width > tile.position.x + tile.width)) {
                        player.position.dx *= -1.1;
                    }
                }
            }
        });
    }
};

export default collisionHandler;
