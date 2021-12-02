import Inventory from './Inventory';
import React, { useState, useCallback } from 'react';
import { roomGenerator, roomProcessing } from './utils/mapGenerationUtils';
import { NODE_COUNT, TILE_COUNT } from './utils/constants';
import { assignTileTexture } from './utils/rngUtils';
import { movementHandler } from './utils/playerMovement';

export const Exploration = (props) => {
    const { currentRoomNumber, rooms, setRooms, playerLocation, setPlayerLocation } = props;
    const currentRoom = rooms[currentRoomNumber];
    const [inventorystate, setInventoryState] = useState('invclosed');
    const tileWidth = 800 / TILE_COUNT;
    const setPlayerLocationCb = (location) => setPlayerLocation(location);
    console.log(playerLocation);

    const handleMovementKeyDown = useCallback((e) => {
        movementHandler(e, setPlayerLocationCb, playerLocation);
    }, []);

    React.useEffect(() => {
        window.addEventListener('keydown', handleMovementKeyDown);
        return () => window.removeEventListener('keydown', handleMovementKeyDown);
    }, []);

    return (
        <div className="exploration" id="mapArea">
            <div className="flexcolumn center">
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(${TILE_COUNT}, ${tileWidth}px)`,
                        gridTemplateRows: `repeat(${TILE_COUNT}, ${tileWidth}px)`,
                        gap: '0',
                    }}
                >
                    {currentRoom &&
                        currentRoom.map((row) =>
                            row.map((tile) => (
                                <div
                                    style={{
                                        width: `${tileWidth}px`,
                                        height: `${tileWidth}px`,
                                    }}
                                    id={tile.tileNumber}
                                    className={`maptile ${tile.tileStyle}`}
                                >
                                    {tile.tileType}
                                </div>
                            ))
                        )}
                </div>
            </div>
            {inventorystate === 'invopen' && <button onClick={() => setInventoryState('invclosed')}>Inventory</button>}
            {inventorystate === 'invclosed' && <button onClick={() => setInventoryState('invopen')}>Inventory</button>}
            <button onClick={() => setRooms([roomGenerator(NODE_COUNT, setPlayerLocation)])}>Re-Roll Map</button>
            {inventorystate === 'invopen' && <Inventory />}
        </div>
    );
};

export default Exploration;
