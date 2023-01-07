// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


const allCharacters = specialCharacters.concat(numericCharacters, lowerCasedCharacters, upperCasedCharacters);
console.log(allCharacters);


// prompt to ask user to choose length of a password 
let chosenNumber = 0;
function passwordLength() {
chosenNumber = prompt("How many characters would you like in your password?") 
if (chosenNumber < 10 || chosenNumber > 64) {
  alert("Choose number between 10 and 64");
  return passwordLength();
}
passwordLength = chosenNumber
}


// Function to prompt user for password options - !
function getPasswordOptions() {
}


// Function for getting a random element from an array - !
var result = [];

var getRandoms = function(allCharacters, chosenNumber) {
  for (var i = 0; i < chosenNumber; i++) {
      result.push(allCharacters[Math.floor(Math.random() * allCharacters.length)]);
  }
  console.log(result)
  return result;
}



// Function to generate password with user input - !
function generatePassword() {
  passwordLength();
  getRandoms(allCharacters, chosenNumber);
  return result.join('');
}



// Get references to the #generate element - !
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);