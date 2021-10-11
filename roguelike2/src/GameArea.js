import './index.css';
import React, {useState} from 'react';
// import './Credits'
// import './Inventory'
import MainMenu from './MainMenu'
import PlayerCreation from './PlayerCreation'
import Inventory from './Inventory'
// import './Encounter'
import Shop from './Shop'
import Exploration from './Exploration'

const GameArea = () => {
 // Curly braces = javascript 
const [gamestate, setGameState] = useState('mainmenu');

  return(
  <div className="container">
    <div className="header"></div>
      <div className="gameArea">
        <button onClick = {() => setGameState('mainmenu')}>Main Menu</button>
        <button onClick = {() => setGameState('exploration')}>Exploration</button>
        <button onClick = {() => setGameState('shop')}>Shop</button>
        <button onClick = {() => setGameState('creation')}>PlayerCreation</button>
      { (gamestate === 'mainmenu') && <MainMenu gamestate={gamestate} setGameState={setGameState}/>}
      { (gamestate === 'exploration') && <Exploration />}
      { (gamestate === 'shop') && <Shop />}
      { (gamestate === 'creation') && <PlayerCreation />}
    </div>
  </div>
  );
}

export default GameArea;