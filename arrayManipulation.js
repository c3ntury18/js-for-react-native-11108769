/**
 * This function converts an array of numbers into a new array by squaring even numbers and tripling odd numbers.
*
 * @param {number[]} numbers - The numerical input array.
 * @return {number[]} A new array containing processed numbers.
 */
function processArray(numbers) {
    // Create a new array to save the processed numbers.
    const result = [];

    // Iterate through all the numbers in the input array.
    for (let i = 0; i < numbers.length; i++) {
        // Check whether the current number is even.
        if (numbers[i] % 2 === 0) {
            // Square the even number and include it in the result array.
            result.push(numbers[i] * numbers[i]);
        } else {
            // Triple the odd number and include it in the result array.
            result.push(numbers[i] * 3);
        }
    }

    // Give back the array that was processed.
    return result;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(numbers);
console.log("Original array:", numbers); // Output: [1, 2, 3, 4, 5]
console.log("Processed array:", processedNumbers); // Output: [3, 4, 9, 16, 15]
