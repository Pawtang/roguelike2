const PlayerCreation = (props) => {
    const { setGamestate, stats, setStats } = props;
    const updateStats = (statIndex, direction, stats, setStats) => {
        const statsCopy = [...stats];
        console.log('click', `${statIndex}, ${direction}`);
        if (direction === 'dec') {
            statsCopy[statIndex].value = statsCopy[statIndex].value - 1;
        } else if (direction === 'inc') {
            statsCopy[statIndex].value = statsCopy[statIndex].value + 1;
        }
        setStats(statsCopy); // Set stats in higher level state;
    };

    const statCheck = () => {
        return stats.reduce((totalValue, currentStat) => totalValue + currentStat.value, 0);
    };

    const narritives = {
        default: "You are average, you are nobody, you're a jack of all trades.",
        str: 'You were raised on beef and lard, pulling the plow on the farm in place of cattle. You never made it to school, you had fields to attend to. Your skin is leather-thick and sun cracked like rhinoceros hide.',
        strdex: 'After years of being tortured by your peers, you began attending the inner-city boxing gym as a teenager. You learned to duck and dodge, but also hit the weights after practice, and ate plenty of oats.',
        strint: '',
        strchr: '',
        strlck: '',
        dex: 'Limber and light, you exceled in your college gymnastics team, where you competed all-around. You believe the best way to deal with your problems is to avoid them - literally.',
        dexint: '',
        dexchr: '',
        dexlck: '',
        int: '',
        intchr: '',
        intlck: '',
        chr: "You've found your way through life not by force or by skill, but by making close friends out of dangerous strangers. There's always a guy you know who can solve any problem you come across.",
        chrlck: "People would hate you if you weren't so damn charming. People are disbelieving that things just keep going right for you. They may express jealousy behind your back, but as soon as you start the conversation, they beam at you.",
        lck: "You've somehow always managed to fail upwards in life. You're not particularily good at anything, but always seem to be in the right place at the right time.",
    };

    const getNarritive = (stats) => {
        switch (true) {
            case stats[0].value > 15:
                return narritives.default;
            case stats[0].value > 10 && stats[1].value > 10:
                return narritives.default;
            default:
                return narritives.default;
        }
    };

    return (
        <div className="flexcolumn center">
            <div className="creation flexcolumn">
                <h1>Create a new character...</h1>

                <div className="player-image flexcolumn">
                    <div className="flexrow">
                        <input type="text" name="name" id="name" placeholder="enter character name" />
                    </div>
                    <div className="narritive">
                        <p>{getNarritive(stats)}</p>
                    </div>
                </div>
                <div className="stat-wrapper">
                    <div className="flexcolumn center">
                        <div className="stat flexrow">
                            <p className="statname">Available Points: {25 - statCheck()}</p>
                            <div className="state-value" id="available">
                                {}
                            </div>
                        </div>
                        {
                            stats.map((stat, idx) => {
                                return (
                                    <div className="stat flexrow">
                                        <p class="statname">{stat.name}</p>
                                        <button
                                            class="statbtn"
                                            onClick={() => updateStats(idx, 'dec', stats, setStats)}
                                            disabled={stats[idx].value === 0}
                                        >
                                            -
                                        </button>{' '}
                                        {/*attempt here to disabled the button functionality when its value is 0*/}
                                        <div className="stat-value" id={stat.id}>
                                            {stat.value}
                                        </div>
                                        <button
                                            class="statbtn"
                                            onClick={() => updateStats(idx, 'inc', stats, setStats)}
                                            disabled={statCheck() >= 25}
                                        >
                                            +
                                        </button>{' '}
                                        {/*attempt here to disable button functionality when maxStats have been reached*/}
                                    </div>
                                );
                            }) // my attempt at generalizing the stats
                        }
                    </div>
                </div>
            </div>
            <div className="">
                <button className="inline-btn">Reset ⭕</button>
                <button onClick={() => setGamestate('exploration')} class="inline-btn">
                    Accept ✅
                </button>
            </div>
        </div>
    );
};

export default PlayerCreation;
