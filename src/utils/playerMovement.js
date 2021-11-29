import { TILE_COUNT } from './constants.js';

export const movementHandler = (e, setPlayerLocation, playerLocation) => {
    e.preventDefault();
    if (e.code === 'ArrowUp') {
        console.log('up');
        setPlayerLocation((playerLocation) =>
            playerLocation[1] > 0 ? [playerLocation[0], playerLocation[1] - 1] : playerLocation
        );
        console.log(playerLocation);
    } else if (e.code === 'ArrowDown') {
        console.log('down');
        setPlayerLocation((playerLocation) =>
            playerLocation[1] < TILE_COUNT ? [playerLocation[0], playerLocation[1] + 1] : playerLocation
        );
        console.log(playerLocation);
    } else if (e.code === 'ArrowLeft') {
        console.log('left');
        setPlayerLocation((playerLocation) =>
            playerLocation[0] > 0 ? [playerLocation[0] - 1, playerLocation[1]] : playerLocation
        );
        console.log(playerLocation);
    } else if (e.code === 'ArrowRight') {
        console.log('right');
        setPlayerLocation((playerLocation) =>
            playerLocation[0] < TILE_COUNT ? [playerLocation[0] + 1, playerLocation[1]] : playerLocation
        );
        console.log(playerLocation);
    }
    // console.log(playerLocation[0], playerLocation[1]);
};
