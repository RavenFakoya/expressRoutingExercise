const { mean, median, mode, validateNumbers } = require('./operations');


describe('validateNumbers function', function(){
    test('should return an array of numbers', function() {
        const res = validateNumbers(['1', '2', '3']);
        expect(res).toEqual([1,2,3]);
    })
})

describe('test mean',  function() {
    test('finds average of array', () => {
        const res = mean([1,2,3,4,5]);
        expect(res).toEqual(3);
    })

    test('find 0 average', () => {
        const res = mean([-1,-2,-3,1,2,3]);
        expect(res).toEqual(0);
    })
})

describe('test median', function(){
    test('find median of even array', () => {
        const res = median([4,1,2,3]);
        expect(res).toEqual(2.5);
    })
    test('find median of odd array', () => {
        const res = median([4,1,2,3,5]);
        expect(res).toEqual(3);
    })
})

describe('test mode', function(){
    test('find mode of array with no reoccuring numbers', () =>{
        const res = mode([4,5,1,7,8,3,2,6]);
        expect(res).toEqual('None')
    })

    test('find mode of array with reoccuring numbers', () =>{
        const res = mode([4,5,1,7,8,3,2,6,7,7,7,3,2,1,]);
        expect(res).toEqual(7)
    })

    test('find mode of array with two reoccuring numbers', () =>{
        const res = mode([5,2,3,1,1,5]);
        expect(res).toEqual([1,5])
    })
})