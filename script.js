// Assignment Code
var generateBtn = document.querySelector("#generate");
// returns the first "ELEMENT" (generate?) within the document that matches the specified selector
// line 28 in html

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var generateBtn;

function generatePassword() {
  var passwordLength = prompt("pick a pw length, 8-128");
}

console.log(generatePassword);
// function generatePassword() {
//   var passwordLength = prompt(
//     "Please Enter How Long You Want Your Password to Be (Between 8 and 128 characters)"
//   );
// }

// variable for all alphabets
// list and then function to split space
// function to lower case and upper case

// write out variable with numbers
// write out special characters

// ask user for apsswrod length
// prompt to choose alphabets
// prompt to choose upper case
// prompt to choose lower case
// prompt to choose specials

//
