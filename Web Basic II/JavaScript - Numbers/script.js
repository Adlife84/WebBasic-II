//Make a random number

// Collect input from a user
let number = prompt("What is a number?");

// Convert the input to a number
let integerNumber = parseInt(number);

// Use Math.random() and the user's number to generate a random number
let getRandomNumber = Math.round((Math.random() * integerNumber) + 1);

// Create a message displaying the random number
alert(`Your random nubmer is: ${getRandomNumber}`);