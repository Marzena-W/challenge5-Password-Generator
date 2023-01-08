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


// Function to prompt user to choose length of a password 
let chosenNumber = 0;
function passwordLength() {
chosenNumber = prompt("How many characters would you like in your password?") 
if (chosenNumber < 10 || chosenNumber > 64) {
  alert("Choose number between 10 and 64");
  return passwordLength();
}
passwordLength = chosenNumber
}


// Function to prompt user for password options
var allCharacters = [];

function getPasswordOptions() {
  let special = confirm("Do you want to include special character?");
    if (special) {
      allCharacters += specialCharacters.join('');
    } else false;

    let numeric = confirm("Do you want to include numeric character?");
    if (numeric) {
      allCharacters += numericCharacters.join('');
    } else false;

    let lower = confirm("Do you want to include lower cased character?");
    if (lower) {
      allCharacters += lowerCasedCharacters.join('');
    } else false;

    let upper = confirm("Do you want to include upper cased character?");
    if (upper) {
      allCharacters += upperCasedCharacters.join('');
    } else false;
  }

  
// Function for getting a random element from an array
var result = [];

var getRandoms = function(allCharacters, chosenNumber) {
  for (var i = 0; i < chosenNumber; i++) {
      result.push(allCharacters[Math.floor(Math.random() * allCharacters.length)]);
  }
  console.log(result)
  return result;
}


// Function to generate password with user input
function generatePassword() {
  passwordLength();
  getPasswordOptions();
  getRandoms(allCharacters, chosenNumber);
  return result.join('');
}



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);