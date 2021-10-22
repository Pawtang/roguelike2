const PlayerCreation = (props) => {
  const stats = [5,3,3,5,5]
  const statCheck =()=>{
    let statTotal = 0;
    for (let i=0; i<stats.length; i++){
      statTotal += stats[i];
    }
    return statTotal;
  }

  const { gamestate, setGameState } = props; //Object destructuring - has same name


  return (
  <div className="flexcolumn center">
    <div className="creation flexrow">
    <div className="player-image">
      <h1>playername</h1>
    </div>
      <div className="stat-wrapper">
        <div className="flexcolumn center">
          <div className="stat flexrow">
            <p className="statname">Available Points: {25 - statCheck()}</p>
            <div className="state-value" id="available">{}</div>
          </div>
          <div className="stat flexrow">
            <p class="statname">Strength</p>
            <button class="statbtn" onClick = {updateStats()}>-</button>
            <div className="stat-value" id="str">{stats[0]}</div>
            <button class="statbtn">+</button>
          </div>
          <div className="stat flexrow">
            <p class="statname">Dexterity</p>
            <button class="statbtn">-</button>
            <div className="stat-value" id="dex">{stats[1]}</div>
            <button class="statbtn">+</button>
          </div>
          <div className="stat flexrow">
            <p class="statname">Intelligence</p>
            <button class="statbtn">-</button>
            <div className="stat-value" id="int">{stats[2]}</div>
            <button class="statbtn">+</button>
          </div>
          <div className="stat flexrow">
            <p class="statname">Charisma</p>
            <button class="statbtn">-</button>
            <div className="stat-value" id="chr">{stats[3]}</div>
            <button class="statbtn">+</button>
          </div>
          <div className="stat flexrow">
            <p class="statname">Luck</p>
            <button class="statbtn">-</button>
            <div className="stat-value" id="lck">{stats[4]}</div>
            <button class="statbtn">+</button>
          </div>
        </div>
      </div>
    </div>

<div className="accept">
  <button onClick={() => setGameState("exploration")} class="accept">Accept</button>
</div>

    </div>
  );
};

export default PlayerCreation;

const updateStats = (e) => {

}

