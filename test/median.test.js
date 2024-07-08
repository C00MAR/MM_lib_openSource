import median from '../src/median.js';

describe('median', () => {
    it('should return 0 for an empty array', () => {
        expect(median([])).toBe(0);
    });

    it('should return NaN if this is not an array', () => {
        expect(median('test')).toBeNaN();
    });

    it('should return NaN if the array contains a non-number', () => {
        expect(median([1, 2, 'test'])).toBeNaN();
    });

    it('should return the median of an array of numbers', () => {
        expect(median([3, 1, 2, 4, 5])).toBe(3);
    });
});