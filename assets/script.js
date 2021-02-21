// This alerts the user once you open the password generator
window.onload = alert("Welcome to Password Generator! Click 'Ok' to begin");

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays with sets of data
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "[", "]", ";", ":", "'", "`", "~", "<", ",", ">", ".", "?", "/", "|"];

// Function that executes these prompts, alerts, and confirms
function getLength() {
  var passwordLength = window.prompt("Choose a length for your password. Password length should be between 8-128 characters");

  if (passwordLength < 8) {
    window.alert("Password length must be a number between 8-128 characters");
    return;
  } else if (passwordLength > 128) {
    window.alert("Password length must be a number between 8-128 characters");
    return;
  } else if (isNaN(passwordLength)) {
    window.alert("Password length must be a number between 8-128 characters");
    return;
  }

  var verifyUppercase = confirm("Click 'Ok' to include uppercase letters in your password");
  var verifyLowercase = confirm("Click 'Ok' to include lowercase letters in your password");
  var verifySpecial = confirm("Click 'Ok' to include special characters in your password");
  var verifyNumbers = confirm("Click 'Ok' to include numbers in your password");

  if (verifyUppercase === false && verifyLowercase === false && verifySpecial === false && verifyNumbers === false) {
    window.alert("Password must include at least 1 character type")
    return;
  }

  // The variable passwordChoice stores all user data from passwordLength, verifyUppercase, and etc
  // This creates an object where user data is stored 
  // On the right, is where all the data is stored
  // On the left, are names that are assigned to the data that is stored
  var passwordChoice = {
    passwordLength: passwordLength,
    verifyLowercase: verifyLowercase,
    verifyUppercase: verifyUppercase,
    verifyNumbers: verifyNumbers,
    verifySpecial: verifySpecial
  }
  return passwordChoice;
}

// randomArray is an argument/parameter
// randomIndex calls for a random index number between 0 and whatever randomArray is
// randomElement says give me the value in the array randomArray EX: index[10] would result in the letter g
// randomArray isn't an array yet, until it has been assigned one called generateRandom on line 104
// In line 107, var generateChar is executing the function Random, which pulls a random index number from generateRandom, which is a full list of all the arrays put together
function Random(randomArray) {
  var randomIndex = Math.floor(Math.random() * randomArray.length);
  var randomElement = randomArray[randomIndex];
  console.log(randomIndex);
  console.log(randomElement);
  return randomElement;
}

// Write password to the #password input 
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
  // var generateRandom is an array with all character types
  // var guaranteedChar is an array that guarantees at least 1 lowercase, 1 uppercase, 1 number, and 1 special character
  // var finalPassword is the final array that guarantee's at least 1 of each character type PLUS all other characters
  var generateRandom = [];
  var guaranteedChar = [];
  var finalPassword = [];

  if (userOptions.verifyLowercase) {
    guaranteedChar.push(Random(lowerCase));
    generateRandom.push(...lowerCase);
  }
  if (userOptions.verifyUppercase) {
    guaranteedChar.push(Random(upperCase));
    generateRandom.push(...upperCase);
  }
  if (userOptions.verifyNumbers) {
    guaranteedChar.push(Random(numericNumbers));
    generateRandom.push(...numericNumbers);
  }
  if (userOptions.verifySpecial) {
    guaranteedChar.push(Random(specialCharacters));
    generateRandom.push(...specialCharacters);
  }

  for (var i = 0; i < userOptions.passwordLength; i++) {
    var generateChar = Random(generateRandom);
    // generateChar is executing the function Random, which pulls a random index number from the array generateRandom, which has all of the values that was pushed
    // This will loop as many times as the user inputted in their passwordLength selection and generate that many indexes 
    finalPassword.push(generateChar);
    // finalPassword is a variable that contains all of the random number of index's that the user selected EX: user selects 50 characters, there will be 50 characters 
    console.log(generateChar);
  }

  for (var i = 0; i < guaranteedChar.length; i++) {
    finalPassword[i] = guaranteedChar[i];
    // This is saying the first 4 elements in finalPassword is being replaced with the 4 random elements that was chosen from guaranteedChar 
    // The guaranteedChar.length is dependent on what the user confirms. EX: If user confirms only 3 prompts, then guaranteedChar.length is 3
    // The i is being defined in the loop, so the count will begin at 0 and increase each time it loops
  }
  return finalPassword.join("");
  // Takes finalPassword array and converts it to a string
}

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);