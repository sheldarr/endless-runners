const collisionHandler = {
    handleHorizontalCollision (player, tile) {
        if ((player.position.y + 0.5 * player.height < tile.position.y + 0.5 * tile.height &&
            player.position.y + player.height - tile.position.y < player.position.x + player.width - tile.position.x &&
            player.position.y + player.height - tile.position.y < tile.position.x + tile.width - player.position.x) ||
            (tile.position.y + 0.5 * tile.height < player.position.y + 0.5 * player.height &&
            tile.position.y + tile.height - player.position.y < player.position.x + player.width - tile.position.x &&
            tile.position.y + tile.height - player.position.y < tile.position.x + tile.width - player.position.x)) {
            player.position.y = player.position.y - player.position.dy;
            player.position.dy = 0;
        }
    },

    handleVerticalCollision (player, tile) {
        if ((player.position.x + 0.5 * player.width < tile.position.x + 0.5 * tile.width &&
            player.position.x + player.width - tile.position.x < player.position.y + player.height - tile.position.y &&
            player.position.x + player.width - tile.position.x < tile.position.y + tile.height - player.position.y) ||
            (tile.position.x + 0.5 * tile.width < player.position.x + 0.5 * player.width &&
            tile.position.x + tile.width - player.position.x < player.position.y + player.height - tile.position.y &&
            tile.position.x + tile.width - player.position.x < tile.position.y + tile.height - player.position.y)) {
            player.position.x = player.position.x - player.position.dx;
            player.position.dx = 0;
        }
    },

    handle (player, tiles, callback) {
        tiles.forEach((tile) => {
            if (tile.isSolid) {
                if (!(player.position.x + player.position.dx > tile.position.x + tile.width ||
                player.position.x + player.width + player.position.dx < tile.position.x ||
                player.position.y + player.position.dy > tile.position.y + tile.height ||
                player.position.y + player.height + player.position.dy < tile.position.y)) {
                    this.handleVerticalCollision(player, tile);
                    this.handleHorizontalCollision(player, tile);
                }
            }
        });
    }
};

export default collisionHandler;
