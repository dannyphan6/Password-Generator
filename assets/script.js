// This alerts the user once you open the password generator
window.onload = alert("Welcome to Password Generator! Click 'Ok' to begin")

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Sets of data assigned to these variables
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "[", "]", ";", ":", "'", "`", "~", "<", ",", ">", ".", "?", "/", "|"];

// This allows you to pull in the variable anywhere in the code
var passwordLength;
var verifyUppercase;
var verifyLowercase;
var verifySpecial;
var verifyNumbers;

// Function that executes these prompts, alerts, and confirms
function getLength() {
  passwordLength = window.prompt("Choose a length for your password. Password length should be between 8-128 characters");

  if(passwordLength < 8) {
    window.alert("Password length must be a number between 8-128 characters");
    return;
  } else if(passwordLength > 128) {
    window.alert("Password length must be a number between 8-128 characters");
    return;
  } else if(isNaN(passwordLength)) {
    window.alert("Password length must be a number between 8-128 characters");
    return;
  } 
  verifyUppercase = confirm("Click 'Ok' to include uppercase letters in your password")
  verifyLowercase = confirm("Click 'Ok' to include lowercase letters in your password")
  verifySpecial = confirm("Click 'Ok' to include special letters in your password")
  verifyNumbers = confirm("Click 'Ok' to include numbers in your password")

// This creates an object where data is stored from the user 
// The variable passwordChoice stores all of the data from passwordLength, verifyUppercase, and etc
// On the right, is where all the data is stored
// On the left, are names that we assign to the data that is stored
  var passwordChoice = {
    passwordLength: passwordLength,
    verifyLowercase: verifyLowercase,
    verifyUppercase: verifyUppercase,
    verifyNumbers: verifyNumbers,
    verifySpecial: verifySpecial
  }
return passwordChoice;
}




// Write password to the #password input (Work on this function to add if else statements)
function generatePassword() {

  
  var userOptions = getLength(); 
  console.log(userOptions.passwordLength);
  console.log(userOptions.verifyLowercase);
  console.log(userOptions.verifyUppercase);
  console.log(userOptions.verifyNumbers);
  console.log(userOptions.verifySpecial);
  
  if(verifyLowercase) {
    lowerCase.push()
  }
  if(verifyUppercase) {
    generateRandom += upperCase;
  }
  if(verifyNumbers) {
    generateRandom += numericNumbers;
  }
  if(verifySpecial) {
    generateRandom += specialCharacters;
  }
  
  
  
}
// Math.floor function
for(var i=0; i < getLength; i++) {
 
}

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








/*

When I click on a button to generate a password, then I am presented with multiple series of prompts 
When prompted for length of password, then choose a length of password that's between 8 to 128 characters 
When prompted for character types, choose lowercase, uppercase, numbers, and/or special characters 
When each prompt is answered, then inputs should be valid or it should prompt the user to choose again
This will be a loop to determine whether input isn't valid 





GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/