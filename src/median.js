/**
 * Calculates the median of an array of numbers.
 *
 * @param {number[]} numbers - The array of numbers.
 * @returns {number} The median value.
 */
export default function calculateMedian(numbers) {
    if (numbers.length === 0) {
        return 0;
    } else if (!Array.isArray(numbers) || numbers.some(num => typeof num !== 'number') || numbers.some(num => isNaN(num))) {
        return NaN;
    }

    numbers.sort((a, b) => a - b);

    const length = numbers.length;
    const middleIndex = Math.floor(length / 2);

    if (length % 2 === 0) {
        return (numbers[middleIndex - 1] + numbers[middleIndex]) / 2;
    } else {
        return numbers[middleIndex];
    }
}