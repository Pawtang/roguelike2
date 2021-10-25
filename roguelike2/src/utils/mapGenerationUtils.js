import { TILE_COUNT } from './constants';
import { betweenGenerator, intGenerator } from './rngUtils';

export const roomGenerator = (nodeNumber) => {
    const room = [];
    const roomSize = 100;
    const initialNodes = [];

    for (let n = 0; n < nodeNumber; n++) {
        initialNodes.push([intGenerator(TILE_COUNT - 1), intGenerator(TILE_COUNT - 1), betweenGenerator(2, 5)]);
    }

    for (let verticalIndex = 0; verticalIndex < roomSize; verticalIndex++) {
        const row = [];
        for (let horizontalIndex = 0; horizontalIndex < roomSize; horizontalIndex++) {
            let tileType = drawOpenSpace(initialNodes, verticalIndex, horizontalIndex);
            if (tileType === 'wall') {
                tileType = Math.random() < 0.5 ? 'wall' : 'open';
            }
            row.push({
                boundaryType: assignBoundaryType(roomSize - 1, verticalIndex, horizontalIndex),
                tileType,
                hasBeenTraveled: false,
                tileNumber: verticalIndex * roomSize + horizontalIndex,
            });
        }
        room.push(row);
    }
    return room;
    // return roomProcessing(room, roomSize);
};

const assignBoundaryType = (roomSize, rowIndex, columnIndex) => {
    if (rowIndex === 0 && columnIndex === 0) {
        return 'nw-corner';
    } else if (rowIndex === 0 && columnIndex === roomSize) {
        return 'ne-corner';
    } else if (rowIndex === roomSize && columnIndex === 0) {
        return 'sw-corner';
    } else if (rowIndex === roomSize && columnIndex === roomSize) {
        return 'se-corner';
    }

    if (rowIndex === 0 && columnIndex !== 0 && columnIndex !== roomSize) {
        return 'north-edge';
    } else if (rowIndex === roomSize && columnIndex !== 0 && columnIndex !== roomSize) {
        return 'south-edge';
    } else if (columnIndex === 0 && rowIndex !== 0 && rowIndex !== roomSize) {
        return 'west-edge';
    } else if (columnIndex === roomSize && rowIndex !== 0 && rowIndex !== roomSize) {
        return 'east-edge';
    }

    return 'none';
};

const drawOpenSpace = (nodes, i, j) => {
    for (let nodeIndex = 0; nodeIndex < nodes.length; nodeIndex++) {
        const node = nodes[nodeIndex];
        const distance = Math.sqrt((i - node[0]) ** 2 + (j - node[1]) ** 2);
        if (distance <= node[2]) {
            return node[0] === i && node[1] === j ? 'openCenter' : 'open';
        }
    }
    return 'wall';
};

export const roomProcessing = (room, roomSize) => {
    console.log('room before', room);
    for (let verticalIndex = 0; verticalIndex < roomSize; verticalIndex++) {
        for (let horizontalIndex = 0; horizontalIndex < roomSize; horizontalIndex++) {
            let tile = room[verticalIndex][horizontalIndex];
            if (tile.tileType === 'wall' && tile.boundaryType === 'none') {
                const south = room[verticalIndex - 1][horizontalIndex].tileType;
                const north = room[verticalIndex + 1][horizontalIndex].tileType;
                const west = room[verticalIndex][horizontalIndex - 1].tileType;
                const east = room[verticalIndex][horizontalIndex + 1].tileType;
                if ((south === 'open' && north === 'open' && west === 'open', east === 'open')) {
                    tile.tileType = 'open';
                }
            }
        }
    }
    console.log('room after', room);
    return room;
};

// const drawPaths = (room, initialNodes) => {
//     for (let current = 0; current < initialNodes.length - 1; current++) {
//         // find path between nodes 1-0/2-1 and connect them
//     }
// };

const persistentMap = (parameters) => {
    //list of objects, representing generated rooms
};
