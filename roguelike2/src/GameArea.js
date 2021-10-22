import React, { useState } from 'react';
// import './Credits'
// import './Inventory'
import MainMenu from './MainMenu';
import PlayerCreation from './PlayerCreation';
// import './Encounter'
import Shop from './Shop';
import Exploration from './Exploration';

const GameArea = () => {
    // Curly braces = javascript
    const [gamestate, setGameState] = useState('mainmenu');
    const [stats, setStats] = useState([
        // Like the item dictionary we hardcoded in the
        //Inventory file, this will likely be moved somewhere in a constants file and will
        //be imported as a reference everywhere
        {
            name: 'Strength',
            id: 'str',
            value: 5,
        },
        {
            name: 'Dexterity',
            id: 'dex',
            value: 5,
        },
        {
            name: 'Intelligence',
            id: 'int',
            value: 5,
        },
        {
            name: 'Charisma',
            id: 'chr',
            value: 5,
        },
        {
            name: 'Luck',
            id: 'lck',
            value: 5,
        },
    ]);

    return (
        <div className="container">
            <div className="header"></div>
            <div className="gameArea">
                <button onClick={() => setGameState('mainmenu')}>
                    Main Menu
                </button>
                <button onClick={() => setGameState('exploration')}>
                    Exploration
                </button>
                <button onClick={() => setGameState('shop')}>Shop</button>
                <button onClick={() => setGameState('creation')}>
                    PlayerCreation
                </button>
                {gamestate === 'mainmenu' && (
                    <MainMenu
                        gamestate={gamestate}
                        setGameState={setGameState}
                    />
                )}
                {gamestate === 'exploration' && <Exploration />}
                {gamestate === 'shop' && <Shop />}
                {/*removed gameState prop for now because we don't use it, we only want to pass around relevant information*/}
                {gamestate === 'creation' && (
                    <PlayerCreation
                        setGameState={setGameState}
                        stats={stats}
                        setStats={setStats}
                    />
                )}
            </div>
        </div>
    );
};

export default GameArea;
