// REQUIRED FEATURES:
// 1 - Create a variable called `firstName` and assign it the value of your first name
let firstName = 'Lora';
// 2 - Create a second variable called `lastName` and assign it the value of your last name
let lastName = 'Roberts';
// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
//     (remember, you already have variables for this, can you use those?)
let fullName = `${firstName} ${lastName}`;
//     Console log the value of `fullName`
console.log (fullName);
// 4 - Create a variable called `luckyNumber` and assign it the value of your lucky number.
let luckyNumber = 7;
//     Console log the value of `luckyNumber`
console.log (luckyNumber);
// 5 - Create a variable `introduction` and using the variables from above,
//     give it the value of:
//     'My name is (full name), and I think (lucky number) is a winner!'.
let introduction = `My name is ${fullName}, and I think ${luckyNumber} is a winner!`;
//     Refer back to the videos if you need help with this one.
//     Console log the value of `introduction`
console.log (introduction);

// 6 - Create a variable named `adventurous` and set it to a boolean value (true or false)
let adventurous = true;
//     Console log the value of `adventurous`
console.log (adventurous);
// 7 - Create a variable named `food`, and set its value to a string of your favorite food
let food = 'indian food';
//     Console log the value of `food`
console.log (food);
// 8 - Create a variable called `pets` and set it to the value of the number of pets you have
let pets= 1;
//     Console log the value of `pets`
console.log (pets);

// 9 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has
let friendsPets = 2;
// 10 - Add two pets to your `pets` variable
pets + 2;

// 11 - Create a constant variable called `allowedPets` and set it to a number value of your choice
const allowedPets = 5;

// 12 - Create a variable called `result`. Create a conditional:
//      if adventurous is true, set `result` to be "Adventures are great!", 
//      if it's not true,  set `result` to be "How about we stay home?"
//      Console log the value of `result`

let result;

if(adventurous){
  result = 'Adventures are great!';
} 
else {
  result = 'How about we stay home?';
}

console.log (result);

// 13 - Create a variable called `diceRoll` and set it to the value of "Try again later.".
//      Create a compound conditional: 
//      if luckyNumber is 2 and adventurous is true,
//      set `diceRoll` to be "Roll the dice!"

let diceRoll = 'Try again later.';

if(luckyNumber == 2 && adventurous){
  diceRoll = 'You win';
}

//      Console log the value of `diceRoll`
console.log(diceRoll);
// 14 - Create a variable called `petStatus`. 
let petStatus;

//      Write a conditional that covers the following:
//      if the value of `pets` is less than the value of `allowedPets`,
//      set `petStatus` to the value of "I can have more pets" 
//      if the value of `pets` is equal to the value of `allowedPets`,
//      set `petStatus` to the value of "I have enough pets" 
//      if the value of `pets` is greater than the value of `allowedPets`.
//      set `petStatus` to the value of "Oh no, I have too many pets!"
if(pets < allowedPets) {
  petStatus = "I can have more pets";
}
 
if(pets = allowedPets) {
  petStatus = 'I have enough pets';
}

if(pets > allowedPets) {
  petStatus = "Oh no.  I have too many pets";
}


// STRETCH GOALS:

// 15 - Make a variable called `mostPets` and a conditional that
//      correctly checks the `pets` and `friendsPets` variables, and
//      assigns the highest value to `mostPets`. There's several possibilities --
//      be sure to think through all the scenarios. 
//      console.log `mostPets` after the conditional has run.

let mostPets;

if(friendsPets > pets) {
  mostPets = friendsPets;
} else if (friendsPets < pets) {
  mostPets = pets;
} else if(friendsPets == pets) {
  mostPets = friendsPets;
}

console.log(mostPets);
// 16 - Make a variable called `luckyResult`
//      Write a *switch* statement that sets `luckyResult` to:
//      "First is the worst" if your lucky number is 1
//      "Second is the best" if your lucky number is 2
//      "Third is the one with the polka dot dress" if your lucky number is 3
//      Otherwise, "Luck is what happens when preparation meets opportunity"
//      You'll need to research how to use switch statements!
//      console.log `luckyResult` after the conditional has run.

let luckyResult;

switch (luckyNumber) {
  case luckyNumber == 1:
    luckyResult = "First is the worst";
    break;
  case luckyNumber == 2:
    luckyResult = "Second is the best";
    break;
  case luckyNumber == 3:
    luckyResult = "Third is the one with the polka dot dress";
    break;
  default:
    luckyResult = "Luck is what happens when preparation meets opportunity";
    break;
}

console.log(luckyResult);

// 17 -- Rewrite question 12 with a `ternary` operator. You'll need to do research!


adventurous ? 'Adventures are great!' : 'How about we stay home?';










// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    firstName: typeof firstName !== 'undefined' ? firstName : undefined,
    lastName: typeof lastName !== 'undefined' ? lastName : undefined,
    fullName: typeof fullName !== 'undefined' ? fullName : undefined,
    luckyNumber: typeof luckyNumber !== 'undefined' ? luckyNumber : undefined,
    introduction: typeof introduction !== 'undefined' ? introduction : undefined,
    adventurous: typeof adventurous !== 'undefined' ? adventurous : undefined,
    food: typeof food !== 'undefined' ? food : undefined,
    pets: typeof pets !== 'undefined' ? pets : undefined,
    friendsPets: typeof friendsPets !== 'undefined' ? friendsPets : undefined,
    allowedPets: typeof allowedPets !== 'undefined' ? allowedPets : undefined,
    result: typeof result !== 'undefined' ? result : undefined,
    diceRoll: typeof diceRoll !== 'undefined' ? diceRoll : undefined,
    petStatus: typeof petStatus !== 'undefined' ? petStatus : undefined,
    mostPets: typeof mostPets !== 'undefined' ? mostPets : undefined,
    luckyResult: typeof luckyResult !== 'undefined' ? luckyResult : undefined,
  };
} catch (e) {
  // Do nothing
}