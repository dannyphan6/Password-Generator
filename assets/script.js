window.onload = alert("Welcome to Password Generator! Click 'Ok' to begin")

// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericNumbers = "0123456789";
var specialCharacters = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
// This allows you to pull in the variable anywhere in the code
var passwordLength;
var verifyUppercase;
var verifyLowercase;
var verifySpecial;


function getLength() {
  var passwordLength = window.prompt("Choose a length for your password. Password length should be between 8-128 characters");

  if(passwordLength < 8) {
    window.alert("Password length must be a number between 8-128 characters");
    getLength();
  } else if(passwordLength > 128) {
    window.alert("Password length must be a number between 8-128 characters");
    getLength();
  } else if(isNaN(passwordLength)) {
    window.alert("Password length must be a number between 8-128 characters");
    getLength();
  } else {
  }
  return passwordLength;
}

function determineUppercase() {
  window.alert("Password must include at least one uppercase letter");

verifyUppercase = confirm("Please confirm by clicking 'Ok'")
}

function determineLowercase() {
  window.alert("Password must include at least one lowercase letter");

verifyLowercase = confirm("Please confirm by clicking 'Ok'")
}

function determineSpecial() {
  window.alert("Password must include at least one special character");

verifySpecial = confirm("Please confirm by clicking 'Ok'")
}


// Write password to the #password input
function generatePassword() {
  getLength();
  determineUppercase();
  determineLowercase();
  determineSpecial();
  
  
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