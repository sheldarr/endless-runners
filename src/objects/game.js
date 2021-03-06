import Board from './board.js';
import Camera from './camera.js';
import Keyboard from './keyboard.js';

function Game () {
    this.players = [];
    this.keyboard = new Keyboard();
    this.gamepads = [];
    this.camera = new Camera(0);
    this.board = new Board();
}

export default Game;
