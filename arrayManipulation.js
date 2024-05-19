function processArray(numbers) {
    return numbers.map(number => {
        if (number % 2 === 0) {
            return number * number; // Square the even number
        } else {
            return number * 3; // Triple the odd number
        }
    });
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5];
const outputArray = processArray(inputArray);
console.log(outputArray); // Output: [3, 4, 9, 16, 15]


function processArray(numbers) {
    return numbers.map(number => {
        if (number % 2 === 0) {
            return number * number; // Square the even number
        } else {
            return number * 3; // Triple the odd number
        }
    });
}

function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        const number = numbers[index];
        if (number % 2 === 0) {
            return str.toUpperCase(); // Capitalize the entire string
        } else {
            return str.toLowerCase(); // Convert the string to lowercase
        }
    });
}

// Example usage:
const inputStrings = ["Kumasi", "Accra", "Abuja", "new york"];
const inputNumbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(inputNumbers);
const formattedStrings = formatArrayStrings(inputStrings, processedNumbers);

console.log(processedNumbers); // Output: [3, 4, 9, 16, 15]
console.log(formattedStrings); // Output: ["kumasi", "ACCRA", "abuja", "NEWYORK"]
