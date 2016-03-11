const coordinatesConverter = {
    toScreen (players, tiles, camera) {
        players.forEach((player) => {
            player.sprite.position.x = player.sprite.worldPosition.x - camera.position.x;
            player.sprite.position.y = player.sprite.worldPosition.y - camera.position.y;
        });

        tiles.forEach((tile) => {
            tile.position.x = tile.worldPosition.x - camera.position.x;
            tile.position.y = tile.worldPosition.y - camera.position.y;
        });
    }
};

export default coordinatesConverter;
