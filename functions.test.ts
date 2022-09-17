const {shuffleArray} = require('./utils')

let testData = [
    {
        numid: 1
    },

    {
        numid: 12
    },

    {
        numid: 14
    },

]


describe('shuffleArray should', () => {

    // This first test can FAIL if shuffle results for index 0 are the same as testData.
    // Couldn't figure out how to make a better check for shuffle
    test('items have been shuffled', () => {
        const shuffledArr = shuffleArray(testData);
        expect(shuffledArr[0].numid).not.toBe(testData[0].numid)
    });

    test('return array the same length as original', () => {
        const arrReturn = shuffleArray(testData);
        expect(arrReturn.length).toBe(testData.length);
    });
});