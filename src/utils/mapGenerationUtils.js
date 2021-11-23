import { DENSITY, MAX_RADIUS, TILE_COUNT } from './constants';
import { betweenGenerator, intGenerator } from './rngUtils';

export const roomGenerator = (nodeNumber) => {
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
            let tileStyle = ''; //Initialize tileStyle
            tileStyle = tileType === 'wall' ? 'wall' : 'open';
            row.push({
                boundaryType: assignBoundaryType(roomSize - 1, verticalIndex, horizontalIndex),
                tileType,
                tileStyle,
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
    // console.log('room before', room);
    // for (let verticalIndex = 0; verticalIndex < roomSize; verticalIndex++) {
    //     for (let horizontalIndex = 0; horizontalIndex < roomSize; horizontalIndex++) {
    //         let tile = room[verticalIndex][horizontalIndex];
    //         if (tile.tileType === 'wall' && tile.boundaryType === 'none') {
    //             const south = room[verticalIndex - 1][horizontalIndex].tileType;
    //             const north = room[verticalIndex + 1][horizontalIndex].tileType;
    //             const west = room[verticalIndex][horizontalIndex - 1].tileType;
    //             const east = room[verticalIndex][horizontalIndex + 1].tileType;
    //             if (south === 'open' && north === 'open' && west === 'open' && east === 'open') {
    //                 // console.log('before', verticalIndex, horizontalIndex, north, south, east, west, tile.tileType);
    //                 tile.tileType = 'open';
    //                 // console.log('executed if statement');
    //                 // console.log('after:', verticalIndex, horizontalIndex, north, south, east, west, tile.tileType);
    //             }
    //         } else if (tile.tileType === 'open' && tile.boundaryType === 'none') {
    //             const south = room[verticalIndex - 1][horizontalIndex].tileType;
    //             const north = room[verticalIndex + 1][horizontalIndex].tileType;
    //             const west = room[verticalIndex][horizontalIndex - 1].tileType;
    //             const east = room[verticalIndex][horizontalIndex + 1].tileType;
    //             const neighbors = [north, south, east, west];
    //             let wallcount = 0;
    //             neighbors.map((e) => {
    //                 if (e === 'wall') wallcount++;
    //             });
    //             if (wallcount >= 3) tile.tileType = 'wall';
    //         }
    //     }
    // }
    for (let verticalIndex = roomSize - 1; verticalIndex >= 0; verticalIndex--) {
        for (let horizontalIndex = 0; horizontalIndex < roomSize; horizontalIndex++) {
            let tile = room[verticalIndex][horizontalIndex];
            if (tile.tileType === 'wall') {
                if (tile.boundaryType === 'none') {
                    const south = room[verticalIndex - 1][horizontalIndex].tileType;
                    const north = room[verticalIndex + 1][horizontalIndex].tileType;
                    const west = room[verticalIndex][horizontalIndex - 1].tileType;
                    const east = room[verticalIndex][horizontalIndex + 1].tileType;
                    tile.tileStyle = north === 'open' ? 'foot' : 'wall';
                    if (south === 'open' && north === 'open' && west === 'open' && east === 'open') {
                        // console.log('before', verticalIndex, horizontalIndex, north, south, east, west, tile.tileType);
                        tile.tileType = 'open';
                        // console.log('executed if statement');
                        // console.log('after:', verticalIndex, horizontalIndex, north, south, east, west, tile.tileType);
                    }
                } else {
                    tile.tileType = 'wall';
                }
            } else if (tile.tileType === 'open') {
                if (tile.boundaryType === 'none') {
                    const south = room[verticalIndex - 1][horizontalIndex].tileType;
                    const north = room[verticalIndex + 1][horizontalIndex].tileType;
                    const west = room[verticalIndex][horizontalIndex - 1].tileType;
                    const east = room[verticalIndex][horizontalIndex + 1].tileType;
                    tile.tileStyle = north === 'wall' ? 'head' : 'open';
                    const neighbors = [north, south, east, west];
                    let wallcount = 0;
                    neighbors.map((e) => {
                        if (e === 'wall') wallcount++;
                    });
                    if (wallcount >= 3) tile.tileType = 'wall';
                } else {
                    tile.tileStyle = 'open';
                }
            }
        }
    }
    // console.log('room after', room);
    // for (let verticalIndex = 0; verticalIndex < roomSize; verticalIndex++) {
    //     for (let horizontalIndex = 0; horizontalIndex < roomSize; horizontalIndex++) {
    //         let tile = room[verticalIndex][horizontalIndex];
    //         if (tile.tileType === 'wall') {
    //             if (tile.boundaryType === 'none' && room[verticalIndex + 1][horizontalIndex].tileType === 'open') {
    //                 tile.tileStyle = 'foot';
    //             } else tile.tileStyle = 'wall';
    //         }
    //         // TODO: This breaks the processing step because it changes tileType to head! The fucntional tag and style tag should be different elements
    //         if (tile.tileType === 'open') {
    //             if (tile.boundaryType == 'none' && room[verticalIndex + 1][horizontalIndex].tileType === 'wall')
    //                 tile.tileStyle = 'head';
    //             else tile.tileStyle = 'open';
    //         }
    //     }
    // }
    return room;
};

export const AssignStyles = (room, roomSize) => {
    //This is where I want to put all of the style assignment functions
    //Have to extract them from RoomProcessing, which should only change opens to walls and vice versa as needed
    //Idea being that "wall" vs "open" is a functional difference (movement) whereas tileStyle is just visual
    //By the way - styles are assigned CSS classes in the rngUtils.js file, under AssignTileTextures, which is called here.
};

// const drawPaths = (room, initialNodes) => {
//     for (let current = 0; current < initialNodes.length - 1; current++) {
//         // find path between nodes 1-0/2-1 and connect them
//     }
// };

const persistentMap = (parameters) => {
    //list of objects, representing generated rooms
};
