const coordinatesConverter = {
    toScreen (player, tiles, camera) {
        player.sprite.position.x = player.sprite.worldPosition.x - camera.rectangle.x;
        player.sprite.position.y = player.sprite.worldPosition.y - camera.rectangle.y;

        tiles.forEach((tile) => {
            tile.position.x = tile.worldPosition.x - camera.rectangle.x;
            tile.position.y = tile.worldPosition.y - camera.rectangle.y;
        });
    }
};

export default coordinatesConverter;
