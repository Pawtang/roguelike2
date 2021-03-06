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
    const { gamestate, setGamestate } = props;
    const [stats, setStats] = useState(INITIAL_STATS);
    const [playerLocation, setPlayerLocation] = useState([0, 0]);
    // const setPlayerLocationCallback = useCallback((e) => {
    //     movementHandler(e, setPlayerLocationCb, playerLocation);
    // }, []);
    const [rooms, setRooms] = useState([roomGenerator([])]);
    // const [rooms, setRooms] = useState([roomGenerator(NODE_COUNT, setPlayerLocation)]);
    const [currentRoomNumber, setCurrentRoomNumber] = useState(0);

    return (
        <div>
            <div className="header"></div>
            <div className="gameArea">
                {gamestate === 'mainmenu' && <MainMenu gamestate={gamestate} setGamestate={setGamestate} />}
                {gamestate === 'exploration' && (
                    <Exploration
                        rooms={rooms}
                        setRooms={setRooms}
                        currentRoomNumber={currentRoomNumber}
                        playerLocation={playerLocation}
                        setPlayerLocation={setPlayerLocation}
                    />
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
