import { DENSITY, MAX_RADIUS, TILE_COUNT } from './constants';
import { betweenGenerator, intGenerator, betweenGeneratorInteger, assignTileTexture } from './rngUtils';

export const roomGenerator = (nodeNumber, setPlayerLocation) => {
    const room = [];
    const roomSize = TILE_COUNT;
    const initialNodes = [];

    for (let n = 0; n < nodeNumber; n++) {
        initialNodes.push([
            intGenerator(TILE_COUNT - 1),
            intGenerator(TILE_COUNT - 1),
            betweenGenerator(2, MAX_RADIUS),
        ]);
    }

    for (let verticalIndex = 0; verticalIndex < roomSize; verticalIndex++) {
        const row = [];
        for (let horizontalIndex = 0; horizontalIndex < roomSize; horizontalIndex++) {
            let tileType = drawOpenSpace(initialNodes, verticalIndex, horizontalIndex);
            if (tileType === 'wall') {
                tileType = Math.random() < DENSITY ? 'wall' : 'open';
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
    // return room;
    console.log('Room Processing');
    console.log(room);
    return roomProcessing(room, roomSize, setPlayerLocation);
};

export const roomProcessing = (room, roomSize, setPlayerLocation) => {
    // console.log('room before', [...room]);
    // tileStyle = tileType === 'wall' ? 'wall' : 'open';
    let footPositions = [];
    for (let i = 0; i < 3; i++) {
        //Process 3 times
        for (let verticalIndex = 0; verticalIndex < roomSize; verticalIndex++) {
            for (let horizontalIndex = 0; horizontalIndex < roomSize; horizontalIndex++) {
                let tile = room[verticalIndex][horizontalIndex];
                if (tile.tileType === 'wall') {
                    const neighbors = getNeighborTileTypes(room, verticalIndex, horizontalIndex, tile);
                    if (checkAllElementsInListEqualValue(neighbors, 'open')) {
                        tile.tileType = 'open';
                    }
                } else if (tile.tileType === 'open') {
                    const neighbors = getNeighborTileTypes(room, verticalIndex, horizontalIndex, tile);
                    let wallcount = 0;
                    neighbors.map((e) => {
                        if (e === 'wall') wallcount++;
                    });
                    if (wallcount >= neighbors.length - 1) tile.tileType = 'wall';
                }
            }
        }
    }

    // console.log('room after', room);
    for (let verticalIndex = 0; verticalIndex < roomSize; verticalIndex++) {
        for (let horizontalIndex = 0; horizontalIndex < roomSize; horizontalIndex++) {
            let tile = room[verticalIndex][horizontalIndex];
            if (tile.tileType === 'wall') {
                if (
                    tile.boundaryType !== 'sw-corner' &&
                    tile.boundaryType !== 'se-corner' &&
                    tile.boundaryType !== 'south-edge' &&
                    room[verticalIndex + 1][horizontalIndex].tileType === 'open'
                ) {
                    tile.tileStyle = assignTileTexture('foot');
                    footPositions.push([verticalIndex, horizontalIndex]);
                } else tile.tileStyle = assignTileTexture('wall');
            }
            if (tile.tileType === 'open') {
                if (
                    tile.boundaryType !== 'sw-corner' &&
                    tile.boundaryType !== 'se-corner' &&
                    tile.boundaryType !== 'south-edge' &&
                    room[verticalIndex + 1][horizontalIndex].tileType === 'wall'
                )
                    tile.tileStyle = assignTileTexture('head');
                else tile.tileStyle = assignTileTexture('open');
            }
        }
    }

    const entranceRoll = betweenGeneratorInteger(0, footPositions.length);
    let exitRoll = betweenGeneratorInteger(0, footPositions.length);
    while (exitRoll === entranceRoll) {
        exitRoll = betweenGeneratorInteger(0, footPositions.length);
    }
    const entrance = room[footPositions[entranceRoll][0]][footPositions[entranceRoll][1]];
    const exit = room[footPositions[exitRoll][0]][footPositions[exitRoll][1]];
    // console.log(entrance, exit);
    entrance.tileStyle = assignTileTexture('entrance');
    exit.tileStyle = assignTileTexture('exit');
    // setPlayerLocation((prevPlayerLocation) => footPositions[entranceRoll]);
    // entrance.tileType = 'entrance';
    // exit.tileType = 'exit';
    return room;
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
            return 'open';
        }
    }
    return 'wall';
};

/* move this to util */
const checkAllElementsInListEqualValue = (list, value) =>
    list.reduce((prev, current) => prev && current === value, true);

const getNeighborTileTypes = (room, verticalIndex, horizontalIndex, tile) => {
    //NOTE - south is + 1 not - 1
    if (tile.boundaryType === 'none') {
        return [
            room[verticalIndex - 1][horizontalIndex].tileType,
            room[verticalIndex + 1][horizontalIndex].tileType,
            room[verticalIndex][horizontalIndex - 1].tileType,
            room[verticalIndex][horizontalIndex + 1].tileType,
        ];
    } else if (tile.boundaryType === 'nw-corner') {
        return [room[verticalIndex][horizontalIndex + 1].tileType, room[verticalIndex + 1][horizontalIndex].tileType];
    } else if (tile.boundaryType === 'ne-corner') {
        return [room[verticalIndex][horizontalIndex - 1].tileType, room[verticalIndex + 1][horizontalIndex].tileType];
    } else if (tile.boundaryType === 'sw-corner') {
        return [room[verticalIndex][horizontalIndex + 1].tileType, room[verticalIndex - 1][horizontalIndex].tileType];
    } else if (tile.boundaryType === 'se-corner') {
        return [room[verticalIndex][horizontalIndex - 1].tileType, room[verticalIndex - 1][horizontalIndex].tileType];
    } else if (tile.boundaryType === 'north-edge') {
        return [
            room[verticalIndex + 1][horizontalIndex].tileType,
            room[verticalIndex][horizontalIndex - 1].tileType,
            room[verticalIndex][horizontalIndex + 1].tileType,
        ];
    } else if (tile.boundaryType === 'south-edge') {
        return [
            room[verticalIndex - 1][horizontalIndex].tileType,
            room[verticalIndex][horizontalIndex - 1].tileType,
            room[verticalIndex][horizontalIndex + 1].tileType,
        ];
    } else if (tile.boundaryType === 'west-edge') {
        return [
            room[verticalIndex - 1][horizontalIndex].tileType,
            room[verticalIndex + 1][horizontalIndex].tileType,
            room[verticalIndex][horizontalIndex + 1].tileType,
        ];
    } else if (tile.boundaryType === 'east-edge') {
        return [
            room[verticalIndex - 1][horizontalIndex].tileType,
            room[verticalIndex + 1][horizontalIndex].tileType,
            room[verticalIndex][horizontalIndex - 1].tileType,
        ];
    }
};

// const drawPaths = (room, initialNodes) => {
//     for (let current = 0; current < initialNodes.length - 1; current++) {
//         // find path between nodes 1-0/2-1 and connect them
//     }
// };

const persistentMap = (parameters) => {
    //list of objects, representing generated rooms
};
