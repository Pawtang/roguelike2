import Exploration from '../Exploration.js';
import { TILE_COUNT } from './constants.js';

export const movementHandler = (e, playerLocation, setPlayerLocation) => {
    if (e.keyCode == '38') {
        // up arrow
        // let tileToLeft = room[horizontalIndex[player.ypos - 1][verticalIndex[player.xpos]
        console.log(`Up pressed. Old location: ${playerLocation}`);
        if (playerLocation[1] > 0) {
            setPlayerLocation([playerLocation[0], playerLocation[1] - 1]);
            console.log(`New location: ${playerLocation}`);
        }
    } else if (e.keyCode == '40') {
        // down arrow
        console.log(`Down pressed. Old location: ${playerLocation}`);
        if (playerLocation[1] < TILE_COUNT) {
            setPlayerLocation([playerLocation[0], playerLocation[1] + 1]);
            console.log(`New location: ${playerLocation}`);
        }
        // setPlayerLocation([playerLocation[0], playerLocation[1] + 1]);
    } else if (e.keyCode == '37') {
        // left arrow
        console.log(`Left pressed. Old location: ${playerLocation}`);
        if (playerLocation[0] > 0) {
            setPlayerLocation([playerLocation[0] - 1, playerLocation[1]]);
            console.log(`New location: ${playerLocation}`);
        }
    } else if (e.keyCode == '39') {
        // right arrow
        console.log(`Right pressed. Old location: ${playerLocation}`);
        if (playerLocation[0] < TILE_COUNT) {
            setPlayerLocation([playerLocation[0] + 1, playerLocation[1]]);
            console.log(`New location: ${playerLocation}`);
        }
    }
};
