/**
 * Calculates the average of an array of numbers.
 *
 * @param {number[]} numbers - The array of numbers.
 * @returns {number} The average of the numbers.
 */
export default function average(numbers) {
    if (numbers.length === 0) {
        return 0;
    } else if (!Array.isArray(numbers) || numbers.some(num => typeof num !== 'number') || numbers.some(num => isNaN(num))) {
        return NaN;
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}