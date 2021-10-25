export const INITIAL_STATS = [
    // Like the item dictionary we hardcoded in the
    //Inventory file, this will likely be moved somewhere in a constants file and will
    //be imported as a reference everywhere
    {
        name: 'Strength 💪',
        id: 'str',
        value: 5,
    },
    {
        name: 'Dexterity 🏃‍♂️',
        id: 'dex',
        value: 5,
    },
    {
        name: 'Intelligence 📚',
        id: 'int',
        value: 5,
    },
    {
        name: 'Charisma 🙂',
        id: 'chr',
        value: 5,
    },
    {
        name: 'Luck 🎲',
        id: 'lck',
        value: 5,
    },
];

export const TILE_COUNT = 50;
export const NODE_COUNT = TILE_COUNT / 5;
export const DENSITY = 0.35;
export const MAX_RADIUS = TILE_COUNT / 10;
