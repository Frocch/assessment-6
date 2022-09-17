const {shuffleArray} = require('./utils')

let testData = [
    {
        num: 1
    },

    {
        num: 12
    },

    {
        num: 14
    },

]


describe('shuffleArray should', () => {
    test('items have been shuffled', () => {
        const shuffledArr = shuffleArray(testData);
        expect(shuffledArr[0].num).not.toBe(testData[0].num)
    });

    test('return array the same length as original', () => {
        const arrReturn = shuffleArray(testData);
        expect(arrReturn.length).toBe(testData.length);
    });
});