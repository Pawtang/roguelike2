export const roomProcessing = (room, roomSize) => {
    // console.log('room before', room);
    for (let verticalIndex = 0; verticalIndex < roomSize; verticalIndex++) {
        for (let horizontalIndex = 0; horizontalIndex < roomSize; horizontalIndex++) {
            let tile = room[verticalIndex][horizontalIndex];
            if (tile.tileType === 'wall' && tile.boundaryType === 'none') {
                const south = room[verticalIndex - 1][horizontalIndex].tileType;
                const north = room[verticalIndex + 1][horizontalIndex].tileType;
                const west = room[verticalIndex][horizontalIndex - 1].tileType;
                const east = room[verticalIndex][horizontalIndex + 1].tileType;
                if (south === 'open' && north === 'open' && west === 'open' && east === 'open') {
                    tile.tileType = 'open';
                }
            } else if (tile.tileType === 'open' && tile.boundaryType === 'none') {
                const south = room[verticalIndex - 1][horizontalIndex].tileType;
                const north = room[verticalIndex + 1][horizontalIndex].tileType;
                const west = room[verticalIndex][horizontalIndex - 1].tileType;
                const east = room[verticalIndex][horizontalIndex + 1].tileType;
                const neighbors = [north, south, east, west];
                let wallcount = 0;
                neighbors.map((e) => {
                    if (e === 'wall') wallcount++;
                    console.log(wallcount);
                });
                if (wallcount >= 3) tile.tileType = 'wall';
            } // not quite working below:
            if (tile.tileType === 'wall' && tile.boundaryType === 'none') {
                if (room[verticalIndex + 1][horizontalIndex].tileType === 'open') {
                    // console.log('foot');
                    tile.tileStyle = 'foot';
                }
            } else tile.tileStyle = 'wall';
            if (tile.tileType === 'open' && tile.boundaryType === 'none') {
                if (room[verticalIndex + 1][horizontalIndex].tileType === 'wall') tile.tileStyle = 'head';
            } else tile.tileStyle = 'open';
        }
    } // end loop
    return room;
};
