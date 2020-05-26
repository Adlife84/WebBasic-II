//Make a random number

// Collect input from a user
let inputLow = prompt("Please provide your lowest number");
let inputHigh = prompt("Please provide your highe st number");

// Convert the input to a number
let lowNumber = parseInt(inputLow);
let highNumber = parseInt(inputHigh);


if (lowNumber && highNumber) {
    // Use Math.random() and the user's number to generate a random number
    let getRandomNumber = Math.floor( Math.random() * (highNumber - lowNumber + 1)) + lowNumber;

    // Create a message displaying the random number
    alert(`${getRandomNumber} is your random nubmer between ${lowNumber} and ${highNumber}`);

} else {
    alert("You need to provide a two numbers. Try again.");
}


