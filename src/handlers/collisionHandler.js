const collisionHandler = {
    handleHorizontalCollision (player, tile) {
        if ((player.texture.worldPosition.y + 0.5 * player.texture.height < tile.worldPosition.y + 0.5 * tile.height &&
            player.texture.worldPosition.y + player.texture.height - tile.worldPosition.y < player.texture.worldPosition.x + player.texture.width - tile.worldPosition.x &&
            player.texture.worldPosition.y + player.texture.height - tile.worldPosition.y < tile.worldPosition.x + tile.width - player.texture.worldPosition.x) ||
            (tile.worldPosition.y + 0.5 * tile.height < player.texture.worldPosition.y + 0.5 * player.texture.height &&
            tile.worldPosition.y + tile.height - player.texture.worldPosition.y < player.texture.worldPosition.x + player.texture.width - tile.worldPosition.x &&
            tile.worldPosition.y + tile.height - player.texture.worldPosition.y < tile.worldPosition.x + tile.width - player.texture.worldPosition.x)) {
            player.texture.worldPosition.y = player.texture.worldPosition.y - player.velocity.y;
            player.velocity.y = 0;
        }
    },

    handleVerticalCollision (player, tile) {
        if ((player.texture.worldPosition.x + 0.5 * player.texture.width < tile.worldPosition.x + 0.5 * tile.width &&
            player.texture.worldPosition.x + player.texture.width - tile.worldPosition.x < player.texture.worldPosition.y + player.texture.height - tile.worldPosition.y &&
            player.texture.worldPosition.x + player.texture.width - tile.worldPosition.x < tile.worldPosition.y + tile.height - player.texture.worldPosition.y) ||
            (tile.worldPosition.x + 0.5 * tile.width < player.texture.worldPosition.x + 0.5 * player.texture.width &&
            tile.worldPosition.x + tile.width - player.texture.worldPosition.x < player.texture.worldPosition.y + player.texture.height - tile.worldPosition.y &&
            tile.worldPosition.x + tile.width - player.texture.worldPosition.x < tile.worldPosition.y + tile.height - player.texture.worldPosition.y)) {
            player.texture.worldPosition.x = player.texture.worldPosition.x - player.velocity.x;
            player.velocity.x = 0;
        }
    },

    handle (player, tiles) {
        tiles.forEach((tile) => {
            if (tile.isSolid) {
                if (!(player.texture.worldPosition.x + player.velocity.x > tile.worldPosition.x + tile.width ||
                player.texture.worldPosition.x + player.texture.width + player.velocity.x < tile.worldPosition.x ||
                player.texture.worldPosition.y + player.velocity.y > tile.worldPosition.y + tile.height ||
                player.texture.worldPosition.y + player.texture.height + player.velocity.y < tile.worldPosition.y)) {
                    this.handleVerticalCollision(player, tile);
                    this.handleHorizontalCollision(player, tile);
                }
            }
        });
    }
};

export default collisionHandler;
