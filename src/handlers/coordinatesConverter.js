const coordinatesConverter = {
    toScreen (player, tiles, camera) {
        player.texture.position.x = player.texture.worldPosition.x - camera.rectangle.x;
        player.texture.position.y = player.texture.worldPosition.y - camera.rectangle.y;

        tiles.forEach((tile) => {
            tile.position.x = tile.worldPosition.x - camera.rectangle.x;
            tile.position.y = tile.worldPosition.y - camera.rectangle.y;
        });
    }
};

export default coordinatesConverter;
