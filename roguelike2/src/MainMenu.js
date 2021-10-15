import './index.css';

function MainMenu(props) {
  const {gamestate, setGameState} = props; //Object destructuring - has same name
  return (
    <div className="menu">
      <div className="menuHeader">
        <h1 id="title">Cyber Cowboy 2077</h1>
      </div>
      <div className="flexcolumn center">
          <button onClick = {() => setGameState('creation')}>New Game</button>
          <button>Load Game</button>
          <button>Credits</button>
      </div>
    </div>
  );
}

export default MainMenu;
