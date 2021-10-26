import React, { useState } from 'react';
import GameArea from './GameArea';

const App = () => {
    const [gamestate, setGamestate] = useState('mainmenu');
    return (
        <div className="container flexcolumn center">
            <div className="flexrow center">
                <button onClick={() => setGamestate('mainmenu')}>Main Menu</button>
                <button onClick={() => setGamestate('exploration')}>Exploration</button>
                <button onClick={() => setGamestate('shop')}>Shop</button>
                <button onClick={() => setGamestate('creation')}>PlayerCreation</button>
            </div>
            <GameArea setGamestate={setGamestate} gamestate={gamestate} />
        </div>
    );
};

export default App;
