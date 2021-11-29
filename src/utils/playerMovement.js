import { TILE_COUNT } from './constants.js';

export const movementHandler = (e, setPlayerLocation) => {
    e.preventDefault();
    if (e.keyCode == '38') {
        setPlayerLocation(playerLocation => playerLocation[1] > 0 ? [playerLocation[0], playerLocation[1] - 1] : playerLocation);
    } else if (e.keyCode == '40') {
        setPlayerLocation(playerLocation => playerLocation[1] < TILE_COUNT ? [playerLocation[0], playerLocation[1] + 1] : playerLocation);
    } else if (e.keyCode == '37') {
        setPlayerLocation(playerLocation => playerLocation[0] > 0 ?[playerLocation[0] - 1, playerLocation[1]] : playerLocation);
    } else if (e.keyCode == '39') {
        setPlayerLocation(playerLocation => playerLocation[0] < TILE_COUNT ? [playerLocation[0] + 1, playerLocation[1]] : playerLocation);
    }
};
