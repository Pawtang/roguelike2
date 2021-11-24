export const movementHandler = (e) => {
    if (e.keyCode == '38') {
        // up arrow
        // player.ypos--
        console.log('up');
    } else if (e.keyCode == '40') {
        // down arrow
        // player.ypos++
        console.log('down');
    } else if (e.keyCode == '37') {
        // left arrow
        // player.xpos--
        console.log('left');
    } else if (e.keyCode == '39') {
        // right arrow
        // player.xpos++
        console.log('right');
    }
};
