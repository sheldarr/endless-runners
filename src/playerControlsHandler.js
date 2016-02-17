const playerControlsHandler = {
    handle (event, player, callback) {
        switch (event.keyCode) {
        case 37:
            player.position.x -= 1;
            callback(player);
            break;
        case 38:
            player.position.y -= 1;
            callback(player);
            break;
        case 39:
            player.position.x += 1;
            callback(player);
            break;
        case 40:
            player.position.y += 1;
            callback(player);
            break;
        }
    }
};

export default playerControlsHandler;
