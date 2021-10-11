import './index.css';

function MainMenu(props) {
  const {gamestate, setGameState} = props; //Object destructuring - has same name
  return (
    <div className="menu">
      <div className="menuHeader">
        <h1 id="title">Cyber Cowboy 2077</h1>
      </div>
      <div className="options">
        <ul>
            <li><a href="">New Game</a></li>
            <li><a href="">Load from Code</a></li>
            <li><a href="">Credits</a></li>
        </ul>
      </div>
    </div>
  );
}

export default MainMenu;
