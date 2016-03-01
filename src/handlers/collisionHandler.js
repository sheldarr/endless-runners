const collisionHandler = {
    handleHorizontalCollision (player, tile) {
        if ((player.sprite.worldPosition.y + 0.5 * player.sprite.height < tile.worldPosition.y + 0.5 * tile.height &&
            player.sprite.worldPosition.y + player.sprite.height - tile.worldPosition.y < player.sprite.worldPosition.x + player.sprite.width - tile.worldPosition.x &&
            player.sprite.worldPosition.y + player.sprite.height - tile.worldPosition.y < tile.worldPosition.x + tile.width - player.sprite.worldPosition.x) ||
            (tile.worldPosition.y + 0.5 * tile.height < player.sprite.worldPosition.y + 0.5 * player.sprite.height &&
            tile.worldPosition.y + tile.height - player.sprite.worldPosition.y < player.sprite.worldPosition.x + player.sprite.width - tile.worldPosition.x &&
            tile.worldPosition.y + tile.height - player.sprite.worldPosition.y < tile.worldPosition.x + tile.width - player.sprite.worldPosition.x)) {
            player.sprite.worldPosition.y = player.sprite.worldPosition.y - player.velocity.y;
            player.velocity.y = 0;
        }
    },

    handleVerticalCollision (player, tile) {
        if ((player.sprite.worldPosition.x + 0.5 * player.sprite.width < tile.worldPosition.x + 0.5 * tile.width &&
            player.sprite.worldPosition.x + player.sprite.width - tile.worldPosition.x < player.sprite.worldPosition.y + player.sprite.height - tile.worldPosition.y &&
            player.sprite.worldPosition.x + player.sprite.width - tile.worldPosition.x < tile.worldPosition.y + tile.height - player.sprite.worldPosition.y) ||
            (tile.worldPosition.x + 0.5 * tile.width < player.sprite.worldPosition.x + 0.5 * player.sprite.width &&
            tile.worldPosition.x + tile.width - player.sprite.worldPosition.x < player.sprite.worldPosition.y + player.sprite.height - tile.worldPosition.y &&
            tile.worldPosition.x + tile.width - player.sprite.worldPosition.x < tile.worldPosition.y + tile.height - player.sprite.worldPosition.y)) {
            player.sprite.worldPosition.x = player.sprite.worldPosition.x - player.velocity.x;
            player.velocity.x = 0;
        }
    },

    handle (players, tiles) {
        players.forEach((player) => {
            tiles.forEach((tile) => {
                if (tile.isSolid) {
                    if (!(player.sprite.worldPosition.x + player.velocity.x > tile.worldPosition.x + tile.width ||
                    player.sprite.worldPosition.x + player.sprite.width + player.velocity.x < tile.worldPosition.x ||
                    player.sprite.worldPosition.y + player.velocity.y > tile.worldPosition.y + tile.height ||
                    player.sprite.worldPosition.y + player.sprite.height + player.velocity.y < tile.worldPosition.y)) {
                        this.handleVerticalCollision(player, tile);
                        this.handleHorizontalCollision(player, tile);
                    }
                }
            });
        });
    }
};

export default collisionHandler;
