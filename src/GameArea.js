import React, { useState } from 'react';
// import './Credits'
// import './Inventory'
import MainMenu from './MainMenu';
import PlayerCreation from './PlayerCreation';
// import './Encounter'
import Shop from './Shop';
import Exploration from './Exploration';
import { roomGenerator } from './utils/mapGenerationUtils';
import { INITIAL_STATS, NODE_COUNT } from './utils/constants';

const GameArea = (props) => {
    // Curly braces = javascript
    const { gamestate, setGamestate } = props;
    const [stats, setStats] = useState(INITIAL_STATS);
    const [rooms, setRooms] = useState([roomGenerator(NODE_COUNT)]);
    const [currentRoomNumber, setCurrentRoomNumber] = useState(0);
    const [playerLocation, setPlayerLocation] = useState([0, 0]);

    return (
        <div>
            <div className="header"></div>
            <div className="gameArea">
                {gamestate === 'mainmenu' && <MainMenu gamestate={gamestate} setGamestate={setGamestate} />}
                {gamestate === 'exploration' && (
                    <Exploration rooms={rooms} setRooms={setRooms} currentRoomNumber={currentRoomNumber} />
                )}
                {gamestate === 'shop' && <Shop />}
                {/*removed gameState prop for now because we don't use it, we only want to pass around relevant information*/}
                {gamestate === 'creation' && (
                    <PlayerCreation setGamestate={setGamestate} stats={stats} setStats={setStats} />
                )}
            </div>
        </div>
    );
};

export default GameArea;
