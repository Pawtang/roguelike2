const PlayerCreation = (props) => {
  const { gamestate, setGameState } = props; //Object destructuring - has same name
  return (
    <div className="creation">
      <h2>This is the player creation area</h2>
      <div className="grid">
        <div className="flexcolumn center griditem-center">
          <div className="stat">
            <p>Strength</p>
            <button>+</button>
            <button>-</button>
          </div>
          <div className="stat">
            <p>Dexterity</p>
            <button>+</button>
            <button>-</button>
          </div>
          <div className="stat">
            <p>Intelligence</p>
            <button>+</button>
            <button>-</button>
          </div>
          <div className="stat">
            <p>Charisma</p>
            <button>+</button>
            <button>-</button>
          </div>
          <div className="stat">
            <p>Luck</p>
            <button>+</button>
            <button>-</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCreation;
