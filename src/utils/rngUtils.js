export const intGenerator = (maxValue) => Math.trunc(Math.random() * maxValue);
export const betweenGenerator = (minValue, maxValue) => intGenerator(maxValue - minValue) + minValue + Math.random();
export const betweenGeneratorInteger = (minValue, maxValue) => intGenerator(maxValue - minValue) + minValue;
export const assignTileTexture = (tileType) => {
    if (tileType === 'open') {
        return `floor${betweenGeneratorInteger(1, 3)}`;
    } else if (tileType === 'wall') {
        return `wall${betweenGeneratorInteger(1, 3)}`;
    }
};
