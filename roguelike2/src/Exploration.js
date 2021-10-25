import Inventory from './Inventory';
import React, { useState } from 'react';
import { roomGenerator, roomProcessing } from './utils/mapGenerationUtils';
import { NODE_COUNT, TILE_COUNT } from './utils/constants';

const Exploration = (props) => {
    const { currentRoomNumber, rooms, setRooms } = props;
    const currentRoom = rooms[currentRoomNumber];
    const [inventorystate, setInventoryState] = useState('invclosed');
    const tileWidth = 600 / TILE_COUNT;
    //This array should be generated...
    return (
        <div className="exploration">
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
                                    className={`maptile ${tile.tileType}`}
                                />
                            ))
                        )}
                </div>
            </div>
            {inventorystate === 'invopen' && <button onClick={() => setInventoryState('invclosed')}>Inventory</button>}
            {inventorystate === 'invclosed' && <button onClick={() => setInventoryState('invopen')}>Inventory</button>}
            <button onClick={() => setRooms([roomGenerator(NODE_COUNT)])}>Re-Draw</button>
            <button onClick={() => setRooms([roomProcessing(currentRoom, TILE_COUNT)])}>Process</button>
            {inventorystate === 'invopen' && <Inventory />}
        </div>
    );
};

export default Exploration;
