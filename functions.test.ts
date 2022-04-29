const {shuffleArray} = require('./utils')

describe('shuffleArray should function correctly', () => {
    
    test('Should return an array', ()=> {
        const arr = [1,2,3,4,5]
        const shuffledArr = shuffleArray(arr)
        expect(Array.isArray(shuffledArr)).toBeTruthy()
    })

    test("Should return an array of same length", ()=> {
        const arr = [4,3,4,5,6,7]
        const shuffledArr = shuffleArray(arr)

        expect(arr.length).toBe(shuffledArr.length)
    })
})