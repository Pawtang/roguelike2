import './index.css';

function MainMenu() {
  return (
    <div className="Menu">
      <header className="Menu-header">
        <h1>Cyber Cowboy 2077</h1>
      </header>
      <div className="options">
        <ul>
            <a href="">New Game</a>
            <a href="">Load from Code</a>
            <a href="">Credits</a>
        </ul>
      </div>
    </div>
  );
}

export default MainMenu;
