import average from '../src/median.js';

describe('average', () => {
    it('should return 0 for an empty array', () => {
        expect(average([])).toBe(0);
    });

    it('should retunn NaN if this is not an array', () => {
        expect(average('test')).toBeNaN();
    });

    it('should return NaN if the array contains a non-number', () => {
        expect(average([1, 2, 'test'])).toBeNaN();
    });
    
    it('should returns the average of an array of numbers', () => {
        expect(average([1, 2, 3, 4, 5])).toBe(3);
    });
});