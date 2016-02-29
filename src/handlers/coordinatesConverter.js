const coordinatesConverter = {
    toScreen (player, tiles, camera) {
        player.position.x = player.worldPosition.x - camera.rectangle.x;
        player.position.y = player.worldPosition.y - camera.rectangle.y;

        tiles.forEach((tile) => {
            tile.position.x = tile.worldPosition.x - camera.rectangle.x;
            tile.position.y = tile.worldPosition.y - camera.rectangle.y;
        });
    }
};

export default coordinatesConverter;
