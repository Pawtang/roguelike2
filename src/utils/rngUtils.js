export const intGenerator = (maxValue) => Math.trunc(Math.random() * maxValue);
export const betweenGenerator = (minValue, maxValue) => intGenerator(maxValue - minValue) + minValue + Math.random();
export const betweenGeneratorInteger = (minValue, maxValue) => intGenerator(maxValue - minValue) + minValue;
export const assignTileTexture = (tileStyle) => {
    if (tileStyle === 'open') {
        return `floor${betweenGeneratorInteger(1, 3)}`;
    } else if (tileStyle === 'wall') {
        return 'wall1';
        // return `wall${betweenGeneratorInteger(1, 3)}`;
    } else if (tileStyle === 'foot') {
        return 'foot';
    } else if (tileStyle === 'head') {
        return 'head';
    }
};
