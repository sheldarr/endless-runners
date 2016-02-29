const collisionHandler = {
    handleHorizontalCollision (player, tile) {
        if ((player.worldPosition.y + 0.5 * player.height < tile.worldPosition.y + 0.5 * tile.height &&
            player.worldPosition.y + player.height - tile.worldPosition.y < player.worldPosition.x + player.width - tile.worldPosition.x &&
            player.worldPosition.y + player.height - tile.worldPosition.y < tile.worldPosition.x + tile.width - player.worldPosition.x) ||
            (tile.worldPosition.y + 0.5 * tile.height < player.worldPosition.y + 0.5 * player.height &&
            tile.worldPosition.y + tile.height - player.worldPosition.y < player.worldPosition.x + player.width - tile.worldPosition.x &&
            tile.worldPosition.y + tile.height - player.worldPosition.y < tile.worldPosition.x + tile.width - player.worldPosition.x)) {
            player.worldPosition.y = player.worldPosition.y - player.worldPosition.dy;
            player.worldPosition.dy = 0;
        }
    },

    handleVerticalCollision (player, tile) {
        if ((player.worldPosition.x + 0.5 * player.width < tile.worldPosition.x + 0.5 * tile.width &&
            player.worldPosition.x + player.width - tile.worldPosition.x < player.worldPosition.y + player.height - tile.worldPosition.y &&
            player.worldPosition.x + player.width - tile.worldPosition.x < tile.worldPosition.y + tile.height - player.worldPosition.y) ||
            (tile.worldPosition.x + 0.5 * tile.width < player.worldPosition.x + 0.5 * player.width &&
            tile.worldPosition.x + tile.width - player.worldPosition.x < player.worldPosition.y + player.height - tile.worldPosition.y &&
            tile.worldPosition.x + tile.width - player.worldPosition.x < tile.worldPosition.y + tile.height - player.worldPosition.y)) {
            player.worldPosition.x = player.worldPosition.x - player.worldPosition.dx;
            player.worldPosition.dx = 0;
        }
    },

    handle (player, tiles) {
        tiles.forEach((tile) => {
            if (tile.isSolid) {
                if (!(player.worldPosition.x + player.worldPosition.dx > tile.worldPosition.x + tile.width ||
                player.worldPosition.x + player.width + player.worldPosition.dx < tile.worldPosition.x ||
                player.worldPosition.y + player.worldPosition.dy > tile.worldPosition.y + tile.height ||
                player.worldPosition.y + player.height + player.worldPosition.dy < tile.worldPosition.y)) {
                    this.handleVerticalCollision(player, tile);
                    this.handleHorizontalCollision(player, tile);
                }
            }
        });
    }
};

export default collisionHandler;
