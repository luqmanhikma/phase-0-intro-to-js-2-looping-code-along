// Code your solutions in this file
// Function 1: writeCards()
function writeCards(names, event) {
  const thankYouMessages = [];
  for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return thankYouMessages;
}

// Function 2 and 3: countDown()
function countDown(number) {
  while (number >= 0) {
      console.log(number);
      number--;
  }
}

// Example usage
const names = ['Alice', 'Bob', 'Charlie'];
const event = 'birthday';

// Call writeCards() with names and event
const thankYouMessages = writeCards(names, event);
console.log(thankYouMessages);

// Call countDown() with a number
const countdownNumber = 5;
countDown(countdownNumber);
