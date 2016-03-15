const collisionHandler = {
    handle (players, tiles) {
        players.forEach((player) => {
            this.handleCollisionWithLeftScreenEdge(player);
            this.handleCollisionWithObstacles(player, tiles);
        });
    },

    handleCollisionWithLeftScreenEdge (player) {
        if (player.index === 0) {
            if (!player.wasHit && player.sprite.position.x <= 0) {
                player.onHitHappened();
            }
            console.log('jeszcze zyc:   ' + player.lives);
        }
    },

    handleCollisionWithObstacles (player, tiles) {
        tiles.forEach((tile) => {
            if (tile.isSolid && !player.ignoreCollisions) {
                if (!(player.worldPosition.x + player.velocity.x > tile.worldPosition.x + tile.width ||
                player.worldPosition.x + player.sprite.width + player.velocity.x < tile.worldPosition.x ||
                player.worldPosition.y + player.velocity.y > tile.worldPosition.y + tile.height ||
                player.worldPosition.y + player.sprite.height + player.velocity.y < tile.worldPosition.y)) {
                    this.handleVerticalCollisionWithObstacles(player, tile);
                    this.handleHorizontalCollisionWithObstacles(player, tile);
                }
            }
        });
    },

    handleHorizontalCollisionWithObstacles (player, tile) {
        if ((player.worldPosition.y + 0.5 * player.sprite.height < tile.worldPosition.y + 0.5 * tile.height &&
            player.worldPosition.y + player.sprite.height - tile.worldPosition.y < player.worldPosition.x + player.sprite.width - tile.worldPosition.x &&
            player.worldPosition.y + player.sprite.height - tile.worldPosition.y < tile.worldPosition.x + tile.width - player.worldPosition.x) ||
            (tile.worldPosition.y + 0.5 * tile.height < player.worldPosition.y + 0.5 * player.sprite.height &&
            tile.worldPosition.y + tile.height - player.worldPosition.y < player.worldPosition.x + player.sprite.width - tile.worldPosition.x &&
            tile.worldPosition.y + tile.height - player.worldPosition.y < tile.worldPosition.x + tile.width - player.worldPosition.x)) {
            player.worldPosition.y -= player.velocity.y;
            player.velocity.y = 0;
        }
    },

    handleVerticalCollisionWithObstacles (player, tile) {
        if ((player.worldPosition.x + 0.5 * player.sprite.width < tile.worldPosition.x + 0.5 * tile.width &&
            player.worldPosition.x + player.sprite.width - tile.worldPosition.x < player.worldPosition.y + player.sprite.height - tile.worldPosition.y &&
            player.worldPosition.x + player.sprite.width - tile.worldPosition.x < tile.worldPosition.y + tile.height - player.worldPosition.y) ||
            (tile.worldPosition.x + 0.5 * tile.width < player.worldPosition.x + 0.5 * player.sprite.width &&
            tile.worldPosition.x + tile.width - player.worldPosition.x < player.worldPosition.y + player.sprite.height - tile.worldPosition.y &&
            tile.worldPosition.x + tile.width - player.worldPosition.x < tile.worldPosition.y + tile.height - player.worldPosition.y)) {
            player.worldPosition.x -= player.velocity.x;
            player.velocity.x = 0;
        }
    }
};

export default collisionHandler;
