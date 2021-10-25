export const intGenerator = (maxValue) => Math.trunc(Math.random() * maxValue);
export const betweenGenerator = (minValue, maxValue) => intGenerator(maxValue - minValue) + minValue + Math.random();
