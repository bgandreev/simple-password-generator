
// Arrays with all possible charactes to include in the generated password
var specialCharset = [ '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', '\'' ]
var lowercaseCharset = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
var uppercaseCharset = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
var numericCharset = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];

//Functionality to display prompts for user to input desired options
function userPrompts() {
  var passwordLength = parseInt(prompt('Please specify desired password length between 8 and 128 characters!'),  10);

  if (Number.isNaN(passwordLength)) {
    alert('Invalid input. Password length must be a number!');
    return null;
  }

  if (passwordLength < 8 || passwordLength > 128 ) {
    alert('Password length must be between 8 and 128 characters!');

    return null;
  }

  var withSpecialCharset = confirm(
    'Would you like to use special characters in your password?'
  );

  var withLowercaseCharset = confirm(
    'Would you like to use lowercase characters in your password?'
  );

  var withUppercaseCharset = confirm(
    'Would you like to use uppercase characters in your password?'
  );

  var withNumericCharset = confirm(
    'Would you like to use numeric characters in your password?'
  );

  if (withSpecialCharset === false && withLowercaseCharset === false && withUppercaseCharset === false && withNumericCharset === false) {
    alert('Please select at least one type of character groups to generate your password');

    return null;
  }
  
  var promptSelections = {
    passwordLength: passwordLength,
    withSpecialCharset: withSpecialCharset,
    withLowercaseCharset: withLowercaseCharset,
    withUppercaseCharset: withUppercaseCharset,
    withNumericCharset: withNumericCharset,
  };

  return promptSelections;
}

//Randomizer function
function randomizer(array) {
  var randomNum = Math.floor(Math.random() * array.length);
  var randomEl = array[randomNum];

  return randomEl;
}

//Function to generate password
function passwordGenerator() {
  var promptSelections = userPrompts();
  
  var generatedPassword = [];

  var allChars = [];

  var includedChars = [];

  if (!promptSelections) {
    return null;
  }

  if (promptSelections.withSpecialCharset) {
    allChars = allChars.concat(specialCharset);
    includedChars.push(randomizer(specialCharset));
  }

  if (promptSelections.withLowercaseCharset) {
    allChars = allChars.concat(lowercaseCharset);
    includedChars.push(randomizer(lowercaseCharset));
  }

  if (promptSelections.withUppercaseCharset) {
    allChars = allChars.concat(uppercaseCharset);
    includedChars.push(randomizer(uppercaseCharset));
  }

  if (promptSelections.withNumericCharset) {
    allChars = allChars.concat(numericCharset);
    includedChars.push(randomizer(numericCharset));
  }

  for (var i = 0; i < promptSelections.passwordLength; i++) {
    var Chars = randomizer(allChars);

    generatedPassword.push(Chars);
  }

  for (var i = 0; i < includedChars.length; i++) {
    
    generatedPassword[i] = includedChars[i];
  }

  return generatedPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function displayPassword() {
  var password = passwordGenerator();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", displayPassword);
