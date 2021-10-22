const PlayerCreation = (props) => {
    //const stats = [5,3,3,5,5] // Note -> we will likely be attaching these as
    //key value pairs, having them in order like this is fine for now buy
    // may lead to future issues. We'll leave it this way for now
    const statCheck = () => {
        let statTotal = 0;
        for (let i = 0; i < stats.length; i++) {
            statTotal += stats[i];
        }
        return statTotal;
    };

    const { setGameState, stats, setStats } = props; //Object destructuring -
    //has same name

    const updateStats = (statIndex, direction, stats, setStats) => {
        const statsCopy = [...stats]; //Create a copy so we don't attempt to
        //modify the original value. May not be necessary but this is a thing
        //due to how variables reference
        // data stored in memory. I can get into this in a call.
        console.log('click', `${statIndex}, ${direction}`);
        if (direction === 'dec') {
            statsCopy[statIndex].value = statsCopy[statIndex].value - 1;
        } else if (direction === 'inc') {
            statsCopy[statIndex].value = statsCopy[statIndex].value + 1;
        }
        setStats(statsCopy); // Set stats in higher level state;
    };

    // ^ the above function can also be made into increaseStat and decreaseStat
    //functions if you would like to separate them. not necessary however
    // also note that every variable we touch inside our function is passed in.
    //I'm not that familiar with functional components
    // but if we want to move these incrementers to utilities because we might
    //need them elsewhere, we make sure there are non dependencies
    // on the current file's variables by doing this.

    const statCheck2 = () => {
        return stats.reduce(
            (totalValue, currentStat) => totalValue + currentStat.value,
            0
        );
        // Arrays.reduce allows you to iterate through the array and sum
        //together the values. Basically
        // it accumulates on the first parameter totalValue and adds each stat's
        //"value" field to it.
        // Can be used to simplify statCheck above as well.
    };

    const narritives = {
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
        chr: "You've found your way through life not by force or by skill, but by making close friends out of dangerous strangers. There's always a guy you know who can solve any problem you come accross.",
        chrlck: "People would hate you if you weren't so damn charming. People are disbelieving that things just keep going right for you. They may express jealousy behind your back, but as soon as you start the conversation, they beam at you.",
        lck: "You've somehow always managed to fail upwards in life. You're not particularily good at anything, but always seem to be in the right place at the right time.",
    };

    return (
        <div className="flexcolumn center">
            <div className="creation flexrow">
                <div className="player-image flexrow">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="enter character name"
                    />
                </div>
                <div className="stat-wrapper">
                    <div className="flexcolumn center">
                        <div className="stat flexrow">
                            <p className="statname">
                                Available Points: {25 - statCheck2()}
                            </p>
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
                                            onClick={() =>
                                                updateStats(
                                                    idx,
                                                    'dec',
                                                    stats,
                                                    setStats
                                                )
                                            }
                                            disabled={stats[idx].value === 0}
                                        >
                                            -
                                        </button>{' '}
                                        {/*attempt here to disabled the button functionality when its value is 0*/}
                                        <div
                                            className="stat-value"
                                            id={stat.id}
                                        >
                                            {stat.value}
                                        </div>
                                        <button
                                            class="statbtn"
                                            onClick={() =>
                                                updateStats(
                                                    idx,
                                                    'inc',
                                                    stats,
                                                    setStats
                                                )
                                            }
                                            disabled={statCheck2() >= 25}
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
            <div className="accept">
                <button
                    onClick={() => setGameState('exploration')}
                    class="accept"
                >
                    Accept
                </button>
            </div>
        </div>
    );
};

export default PlayerCreation;
