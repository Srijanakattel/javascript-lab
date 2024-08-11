// program to find the factorial of a number

// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));

// check if number is even
if (number % 2 == 0) {

    // checking if number is negative
    if (number < 0) {
        document.write('Error! Factorial for negative number does not exist.');
    }
    // if number is 0
    else if (number === 0) {
        document.write(`The factorial of ${number} is 1.`);
    }
    // if number is positive
    else {
        let fact = 1;
        for (let i = 1; i <= number; i++) {
            fact *= i;
        }
        document.write(`The factorial of ${number} is ${fact}.`);
    }
} else {
    document.write("The number is not even. Please enter an even number.");
}
