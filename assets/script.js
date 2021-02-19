// This alerts the user once you open the password generator
window.onload = alert("Welcome to Password Generator! Click 'Ok' to begin")

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Sets of data assigned to these variables
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "[", "]", ";", ":", "'", "`", "~", "<", ",", ">", ".", "?", "/", "|"];

// Function that executes these prompts, alerts, and confirms
function getLength() {
  var passwordLength = window.prompt("Choose a length for your password. Password length should be between 8-128 characters");

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
  var verifyUppercase = confirm("Click 'Ok' to include uppercase letters in your password")
  var verifyLowercase = confirm("Click 'Ok' to include lowercase letters in your password")
  var verifySpecial = confirm("Click 'Ok' to include special characters in your password")
  var verifyNumbers = confirm("Click 'Ok' to include numbers in your password")

  if(verifyUppercase === false && verifyLowercase === false && verifySpecial === false && verifyNumbers === false) {
    window.alert("Password must include at least 1 character type")
    return;
  }

// This creates an object where data is stored from the user 
// The variable passwordChoice stores all of the data from passwordLength, verifyUppercase, and etc
// On the right, is where all the data is stored
// On the left, are names that we assign to the data that is stored
// Key value pair (Look this up later)
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
// userOptions = passwordChoice because passwordChoice returns the user input data that's stored
// Since userOptions = getLength, then this is saying that whatever getLength returns, is equal to userOptions
// In this case, an object is equal to userOptions because passwordChoice is an object

function generatePassword() {

  var userOptions = getLength(); 
  console.log(userOptions.passwordLength);
  console.log(userOptions.verifyLowercase);
  console.log(userOptions.verifyUppercase);
  console.log(userOptions.verifyNumbers);
  console.log(userOptions.verifySpecial);

// Creates a variable with an empty array, that will be filled with the 4 arrays above by using .push
  var generateRandom = [];
  var guaranteedChar = [];
  var finalPassword = [];
  
  if(userOptions.verifyLowercase) {
    guaranteedChar.push(Random(lowerCase));
    generateRandom.push(...lowerCase);
  }
  if(userOptions.verifyUppercase) {
    guaranteedChar.push(Random(upperCase));
    generateRandom.push(...upperCase);
  }
  if(userOptions.verifyNumbers) {
    guaranteedChar.push(Random(numericNumbers));
    generateRandom.push(...numericNumbers);
  }
  if(userOptions.verifySpecial) {
    guaranteedChar.push(Random(specialCharacters));
    generateRandom.push(...specialCharacters);
  }
  
  for(var i=0; i < userOptions.passwordLength; i++) {
    var generateChar = Random(generateRandom)
    // generateChar is executing the function Random, which pulls a random index number from the array generateRandom, which has all of the values that was pushed
    finalPassword.push(generateChar)
    // finalPassword is a variable that 
    console.log(generateChar);
  }

  for(var i=0; i < guaranteedChar.length; i++) {
    finalPassword[i] = guaranteedChar[i]
    // This is saying the first 4 index's in finalPassword is being replaced with the 4 random index's that was chosen from guaranteedChar 
  } 
return finalPassword.join("");
// Takes finalPassword array and converts it to a string

}

// characterArray is a placeholder for now
// arrayIndex calls for a random index number
// randomEl says give me the letter in the array characterArray of the random index number that's generated from arrayIndex EX: index[10] would result in the letter g
function Random(randomArray) {
  var randomIndex = Math.floor(Math.random() * randomArray.length)
  var randomElement = randomArray[randomIndex]; 
  console.log(randomIndex);
  console.log(randomElement);
  return randomElement;
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