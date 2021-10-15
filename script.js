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
  var numbers = confirm("You want number in ya pw?");
  var lowercases = confirm("ya want lowercase letter in your pw?");
  var uppercases = confirm("ya want upper cases in your pw too?");
  var special = confirm("specials too? or nah");
  var minimumCount = 0;
  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";
}

let lowerArrayString = "abcdefghijklmnopqrstuvwxyz";

var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerArray = lowerArrayString.split("");
var upperArray = String.prototype.toUpperCase.apply(lowerArrayString).split("");
var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*"];

console.log(numberArray);
console.log(lowerArray);
console.log(upperArray);
console.log(specialArray);

let upperArray = true;

// get user choice

// function getUserNumber() {
//  var numbers = true;
//  return numberArray;
// }

// let totalUserArray = [];

// totalUserArray.push(getUserNumber, getUserSpecial, getUserUpper, getUserLower);

// function getUserNumber() {
//   if (numbers) {
//     return numberArray;
//   } else {
//     console.log(No Number)
//   }
// }
// function getUserSpecials() {
//   if (special) {
//     return specialArray;
//   }
// }
// function getUserUpper() {
//   if (uppercases) {
//     return upperArray
//   }
// }
// function getUserLower() {
//   if (lowercases) {
//     return lowerArray
//   }
// }

// // !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
// let specialString = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
// const specialSplit = specialString.split("");

// console.log(specialString);
// console.log(specialSplit);

// // if approves of numbers then...
// if (numbers);
// {
//   var numberArray =
// }

// // i want a list of numbers
// var numberArray = numbers();

// take all those numbers, and add them to another list

// add all arrays to one source
const totalArray = numberArray.concat(lowerArray, upperArray, specialArray);

// var functionArray = [
//   function getNumbers() {
//     return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
//   },
//   function getLowerCases() {
//     return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
//   },
//   function getUpperCases() {
//     return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
//   },
//   function getSpecials() {
//     return String.fromCharCode(Math.floor(Math.random() * special.length));
// }

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
