function Keyboard () {
    this.buttons = [];

    for (let i = 0; i < 256; i++) {
        this.buttons[i] = {pressed: false};
    }
}

export default Keyboard;
