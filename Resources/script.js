
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
    alert('Please select at least one type of character group to generate your password');
    return null;
  }
  
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
