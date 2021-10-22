function MainMenu(props) {
  const { gamestate, setGameState } = props; //Object destructuring - has same name
  return (
    <div className="menu">
      <div className="menuHeader">
        <h1 id="title">CYBER COWBOY 2077</h1>
      </div>
      <div className="flexcolumn center">
        <button onClick={() => setGameState("creation")} class="menubtn">New Game</button>
        <button class="menubtn">Load Game</button>
        <button class="menubtn">Credits</button>
      </div>
    </div>
  );
}

export default MainMenu;
