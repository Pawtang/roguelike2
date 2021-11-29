import Inventory from './Inventory';
import React, { useState } from 'react';
import { roomGenerator, roomProcessing } from './utils/mapGenerationUtils';
import { NODE_COUNT, TILE_COUNT } from './utils/constants';
import { assignTileTexture } from './utils/rngUtils';
import { movementHandler } from './utils/playerMovement';

export const Exploration = (props) => {
    const { currentRoomNumber, rooms, setRooms } = props;
    const currentRoom = rooms[currentRoomNumber];
    const [inventorystate, setInventoryState] = useState('invclosed');
    const tileWidth = 800 / TILE_COUNT;
    const [playerLocation, setPlayerLocation] = useState([0, 0]);
    //This array should be generated...

    React.useEffect(() => {
        window.addEventListener('keydown', (e) => movementHandler(e, playerLocation, setPlayerLocation));
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
                                    className={`maptile ${assignTileTexture(tile.tileStyle)}`}
                                />
                            ))
                        )}
                </div>
            </div>
            {inventorystate === 'invopen' && <button onClick={() => setInventoryState('invclosed')}>Inventory</button>}
            {inventorystate === 'invclosed' && <button onClick={() => setInventoryState('invopen')}>Inventory</button>}
            <button onClick={() => setRooms([roomGenerator(NODE_COUNT)])}>Re-Draw</button>
            <button onClick={() => setRooms([roomProcessing(currentRoom, TILE_COUNT, setPlayerLocation)])}>
                Process
            </button>
            {inventorystate === 'invopen' && <Inventory />}
        </div>
    );
};

export default Exploration;
