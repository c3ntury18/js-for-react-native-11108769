function processArray(numbers) {
    return numbers.map(number => {
        if (number % 2 === 0) {
            return number * number; 
        } else {
            return number * 3;
        }
    });
}

function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        const number = numbers[index];
        if (number % 2 === 0) {
            return str.toUpperCase(); 
        } else {
            return str.toLowerCase(); 
        }
    });
}

function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => {
        return {
            originalName: name,
            modifiedName: modifiedNames[index],
            id: index + 1
        };
    });
}


const inputStrings = ["Kumasi", "Accra", "Abuja", "new york"];
const inputNumbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(inputNumbers);
const formattedStrings = formatArrayStrings(inputStrings, processedNumbers);
const userProfiles = createUserProfiles(inputStrings, formattedStrings);

console.log(processedNumbers); 
console.log(formattedStrings); 
console.log(userProfiles); 

